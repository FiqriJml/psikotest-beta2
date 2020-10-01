import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase'
import {addContohsoal, getDownloadURL, selectBabsoalById, uploadImage } from '../../testAction'

export default function Contoh5({data, action, match}) {
    const {testId, babId} = match.params
    const [imageAsFile, setImageAsFile] = useState('')
    const dispatch = useDispatch()
    const noImage = `https://firebasestorage.googleapis.com/v0/b/psikotest-rumah-hijau.appspot.com/o/images%2Fno-image.png?alt=media&token=e36f4ccc-4a8c-417c-bb19-abc89e10ec3a`
    useFirestoreConnect([
        {collection: 'tests', doc: testId, subcollections: [{collection: 'soal', doc: babId}],  storeAs: "babsoal"},
    ]);
    const [showFormTambah, setshowFormTambah] = useState(false)
    const [progress, setprogress] = useState(0)
    const [uploading, setuploading] = useState(false)
    const babsoal = useSelector(state => selectBabsoalById(state, babId))
    if(!isLoaded(babsoal)){
        return <p>Loading...</p>
    }
    if(isEmpty(babsoal)){
        return <h1 className="text-center">Page Not Found</h1>
    }
    const opsi_contoh_src =  babsoal.opsi_contoh_src
    const handleImageAsFile = (e) => {
        const image = e.target.files[0]
        setImageAsFile(imageFile => (image))
    }
    const onSubmit = (e) => {
        e.preventDefault()
        console.log('start of upload')
        if(imageAsFile === '' ) {
            console.error(`not an image, the image file is a ${typeof(imageAsFile)}`)
        }
        const ket = "opsi"
        dispatch(action({testId, babId, data, imageAsFile, ket}))
        // history.push(currUrl)
    }
    const addContohSoalImage = async (e) => {
        e.preventDefault()
        if(imageAsFile === '' ) {
            console.error(`not an image, the image file is a ${typeof(imageAsFile)}`)
            return;
        }
        setuploading(true)
        // img number
        const imgNo = babsoal.list_contoh.length + 1
        const task = uploadImage({testId, babId, imgNo, imageAsFile})
        task.on('state_changed', (data) => {
            let persen = parseInt((data.bytesTransferred / data.totalBytes) * 100)
            setprogress(persen)
            console.log(`${persen}%`)
        })
        task.then( async (resp) => {
            const imgPath = await getDownloadURL(resp.ref.fullPath)
            const data = {imgPath}
            setuploading(false)
            // selanjutnya simpan di database
            dispatch(addContohsoal({testId, babId, data})).then(()=> {
            // kemudian toogleForm()
                toogleForm()
            })
        })
    }
    const toogleForm = () => {
        setshowFormTambah(!showFormTambah)
    }
    const btnTambahSoal = <div className="text-center">
        <button className="btn btn-sm btn-success" onClick={toogleForm}>Tambah soal</button>
        {/* onclick show form dan hideself */}
    </div>

    let no_contoh = 1
    return <>
        <div className="border px-2 pb-2">
            <h6>Opsi Contoh Soal</h6>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <img style={{maxHeight: 200}} className="img-fluid" alt="gambar contoh opsi" src={opsi_contoh_src} height="200"/>
                    <input id="opsi" type="file" accept="image/x-png,image/jpeg"
                        onChange={handleImageAsFile} required/>
                </div>
                <div className="text-right">
                    <button className="btn btn-sm btn-secondary">Submit</button>
                </div>
            </form>
        </div>
        <br/>
        {/* sedang di kerjakan 26 september */}
        <div className="border px-2 pb-2">
            <h6>Contoh Soal</h6>
            {/* soal yang sudah ada */}
            <div>
                {babsoal.list_contoh.map(contoh_soal => ( 
                    <p key={no_contoh}>{no_contoh++}. <img style={{maxHeight: 150}} alt="..." src={contoh_soal.imgPath}/></p>
                ))}
            </div>
            { showFormTambah ? null : btnTambahSoal }
            <div className={`border px-4 py-2 pb-4 m-4 ${showFormTambah ? null : "d-none"}`}>
                <form onSubmit={addContohSoalImage} className="text-center">
                    <h6>Form tambah contoh soal</h6>
                    <div className="form-group">
                        <img style={{maxHeight: 150}} alt="..." src={noImage}/>
                        <input id="opsi" type="file" accept="image/x-png,image/jpeg"
                            onChange={handleImageAsFile} required/>
                    </div>
                    <div className="text-center">
                        {
                            uploading ? 
                            <button className="btn btn-primary" type="button" disabled>
                            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                            Loading... {progress}
                            </button> :
                            <button className="btn btn-sm btn-success">Submit</button>

                        }
                        
                    </div>
                </form>
            </div>
        </div>
    </>
}

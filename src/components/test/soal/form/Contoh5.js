import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { isEmpty, isLoaded, useFirestoreConnect } from 'react-redux-firebase'
import { addContohsoal, addContohSoalGroup, getDownloadURL, selectBabsoalById, uploadImageTo } from '../../testAction'

export default function Contoh5({match}) {
    const {testId, babId} = match.params
    const [imageAsFile, setImageAsFile] = useState('')
    const [uploading, setuploading] = useState(false)
    const [groupFormOn, setgroupFormOn] = useState(false)
    const [soalFormOn, setsoalFormOn] = useState(false)
    const [indexSoal, setindexSoal] = useState(0)
    const [keySoal, setkeySoal] = useState(0)
    const [progress, setprogress] = useState(0)

    useFirestoreConnect([
        {collection: 'tests', doc: testId, subcollections: [{collection: 'soal', doc: babId}],  storeAs: "babsoal"},
    ]);
    const dispatch = useDispatch()
    const babsoal = useSelector(state => selectBabsoalById(state, babId))
    if(!isLoaded(babsoal)){
        return <p>Loading...</p>
    }
    if(isEmpty(babsoal)){
        return <h1 className="text-center">Page Not Found</h1>
    }
    const handleImageAsFile = (e) => {
        const image = e.target.files[0]
        setImageAsFile(imageFile => (image))
    }
    const btnUpload = (onClick) => (
        uploading ? <button className="btn btn-sm btn-primary" type="button" disabled>
        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            &nbsp;Mengunggah... {progress}
        </button> : <> <button className="btn btn-sm btn-success">Unggah</button> &nbsp;
        <button onClick={onClick} type="button" className="btn btn-sm btn-secondary">Cancel</button> </> 
    )
        
    // Group FORM 
    const addGroupSoal = async (e) => {
        e.preventDefault()
        if(imageAsFile === '' ) {
            console.error(`not an image, the image file is a ${typeof(imageAsFile)}`)
            return;
        }
        setuploading(true)
        const groupNo = babsoal.list_contoh.length + 1
        const imagePath = `/${testId}/${babId}/soal/${groupNo}/group`
        const task = uploadImageTo({imagePath, imageAsFile})
        task.on('state_changed', (snapShot) => {
            let persen = parseInt((snapShot.bytesTransferred / snapShot.totalBytes) * 100)
            setprogress(persen)
        } )
        task.then( async (resp) => {
            // selanjutnya simpan alamat image pada database
            const imgPath = await getDownloadURL(resp.ref.fullPath)
            const data = {
                imgOpsiPath: imgPath,
                soalGroup: []
                // soalGroup => {imgSoalPath, key}
            }
            dispatch(addContohsoal({testId, babId, data})).then( () => {
                setuploading(false)
                toogleGroupForm()
            })
        })
        e.target.reset()
    }
    const toogleGroupForm = () => {
        setgroupFormOn(!groupFormOn)
    }
    const groupFormBtn = <button onClick={toogleGroupForm} className="btn btn-sm btn-secondary">Tambah Group Soal</button>
    const groupForm = <div className={`border p-4 ${groupFormOn ? null : "d-none"}`}>
        <h6 className="text-center">Tambah Group Soal</h6>
        <form onSubmit={addGroupSoal}>
            <div className="form-group">
                <label htmlFor="group_soal">Unggah Gambar Group Soal</label>
                <input className="form-control" id="group_soal" type="file" accept="image/x-png,image/jpeg"
                onChange={handleImageAsFile} required/>
            </div>
            {
                btnUpload(toogleGroupForm)
            }
        </form>
    </div>
    // END Group FORM    
    // SOAL FORM
    const saveSoalGroup = async (e) => {
        e.preventDefault()
        if(imageAsFile === '' ) {
            console.error(`not an image, the image file is a ${typeof(imageAsFile)}`)
            return;
        }
        const groupNo = indexSoal + 1
        const noSoal = babsoal.list_contoh[indexSoal].soalGroup.length + 1
        const imagePath = `/${testId}/${babId}/soal/${groupNo}/${noSoal}`
        
        const task = uploadImageTo({imagePath, imageAsFile})
        setuploading(true)
        task.on('state_changed', (snapShot) => {
            let persen = parseInt((snapShot.bytesTransferred / snapShot.totalBytes) * 100)
            setprogress(persen)
        })
        task.then( async (resp) => {
            // selanjutnya simpan alamat image pada database
            const imgPath = await getDownloadURL(resp.ref.fullPath)
            const data = {
                imgSoalPath: imgPath,
                key: keySoal
            }
            const index = indexSoal
            dispatch(addContohSoalGroup({testId, babId, data, index})).then( () => {
                setuploading(false)
                toogleSoalForm()
            })
        })
        e.target.reset()
    }
    const toogleSoalForm = () => {
        setsoalFormOn(!soalFormOn)
    }
    const tambahSoalClicked = (index) => {
        setindexSoal(index)
        toogleSoalForm()
    }
    const onChangeKey = (e) => {
        setkeySoal(parseInt(e.target.value))
    }
    const soalForm = <div className={`border p-4 ${soalFormOn ? null : "d-none"}`}>
        <h6 className="text-center">Tambah Soal</h6>
        <form onSubmit={saveSoalGroup}>
            <div className="form-group">
                <label htmlFor="soal">Unggah Gambar Soal</label>
                <input className="form-control" id="soal" type="file" accept="image/x-png,image/jpeg"
                onChange={handleImageAsFile} required/>
            </div>
            <div className="form-group">
                <label htmlFor="soal_key">Jawaban</label>
                <select value={keySoal} onChange={onChangeKey} className="form-control" id="soal_key" required>
                    <option value="0">A</option>
                    <option value="1">B</option>
                    <option value="2">C</option>
                    <option value="3">D</option>
                    <option value="4">E</option>
                </select>
            </div>
            { btnUpload(toogleSoalForm) }
        </form>
    </div>
    // END SOAL FORM
    // LIST SOAL
    const listSoal = <> <h6>List Soal</h6>
    <div className="border p-2">
        {
            babsoal.list_contoh.map((opsi, index) => (
                <span key={index}> <p>{index+1}. <img style={{maxHeight: 160}} alt="..." src={opsi.imgOpsiPath}/></p>
                <div className="pl-4 pr-4 mb-3">
                    { opsi.soalGroup.map((soal, no) => (
                        <p key={no}>{no+1}. <img style={{maxHeight: 80}} alt="..." src={soal.imgSoalPath}/></p>
                    ))}
                    <button index={index} className="btn btn-sm btn-secondary" onClick={() => tambahSoalClicked(index)}>Tambah Soal</button>
                </div> <br/><br/> </span>
                // klik tambah soal tentukan index soal kemudian tambah soal
            ))
        }
    </div> </>
    // END LIST SOAL
    return (
        <>
        { groupFormOn ? null : groupFormBtn }
        { groupForm }
        <br/><br/>
        { soalForm }
        { !soalFormOn ? listSoal : null }
        </>
    )
}

import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import {selectTestById, selectBabList} from './testAction'
import { isLoaded, useFirestoreConnect, isEmpty } from 'react-redux-firebase'

export const BabSoalList = ({match}) =>{
    const {testId} = match.params
    // fungsinya untuk otomatis konek dengan firestore, setiap ada peruban akan respon
    useFirestoreConnect([
        {collection: 'tests', doc: testId, subcollections: [{collection: 'soal'}],  storeAs: "babsoal", orderBy: "no_bab"},
        {collection: 'tests', }
    ]);
    
    const dispatch = useDispatch()
    
    const test = useSelector(state => selectTestById(state, testId))
    const listBabsoal = useSelector(state => selectBabList(state))

    
    if (!isLoaded(test)) return 'Loading...';
    if(isEmpty(test)){
        return (
            <div className="text-center">
                <h2>Test tidak ditemukan</h2>
            </div>
        )
    }
    const onDelete = (e) => {
        const babId = e.target.id
    }
    const hitungJumlah = (jml) => {
        // jml = 30
        if(!jml) jml = "(empty)"
        else{
            jml = `${jml} butir`
        }
        return jml
    }
    const hitungWaktu = (waktu) => {
        // waktu = 35
        if(!waktu) waktu = "(empty)"
        else waktu = `${waktu} menit`
        return waktu
    }
    let content = <tr></tr>
    if(isEmpty(listBabsoal)){
        content = <tr>
            <td colSpan="3">No Data</td>
        </tr>
    }else{
        let no = 0
        // console.log(listBabsoal)
        content = listBabsoal.map(bab => (
            <tr key={bab.id}>
                <td>{++no}</td>
                <td>{bab.no}</td>
                <td>{bab.tipe_soal}</td>
                <td>{bab.bentuk_soal}</td>
                <td>{hitungJumlah(bab.jml_soal)}</td>
                <td>{hitungWaktu(bab.waktu_pengerjaan)}</td>
                <td width="100px">
                    <div className="btn-group" role="group">
                        <Link to={`${testId}/${bab.id}`} className="btn btn-sm btn-primary">view</Link>
                        <Link to={`${testId}/bab/update/${bab.id}`} className="btn btn-sm btn-secondary">edit</Link>
                        <button className="btn btn-danger btn-sm" onClick={onDelete} id={bab.id}>del</button>
                    </div>
                </td>
            </tr>
        ))
    }
    return (
        <div>
            <h2>{test.name}</h2>
            {/* <button onClick={addingbab} className="btn btn-secondary btn-sm">Add bab Soal</button> <br/> <br/> */}
            <Link to={`/${testId}/bab/add`} className="btn btn-secondary btn-sm">Add bab</Link> <br/> <br/>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>bab</th>
                        <th>Tipe Soal</th>
                        <th>Bentuk Soal</th>
                        <th>Jumlah Soal</th>
                        <th>Waktu Pengerjaan</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {content}
                </tbody>
            </table>
        </div>
    )
}

export default BabSoalList

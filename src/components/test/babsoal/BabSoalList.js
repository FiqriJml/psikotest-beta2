import React from 'react'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {selectTestById, selectBabList} from '../testAction'
import { isLoaded, useFirestoreConnect, isEmpty } from 'react-redux-firebase'

export const BabSoalList = ({match}) =>{
    const {testId} = match.params
    const currUrl = `/administrator/tests/${testId}`

    // fungsinya untuk otomatis konek dengan firestore, setiap ada peruban akan respon
    useFirestoreConnect([
        {collection: 'tests', doc: testId, subcollections: [{collection: 'soal'}],  storeAs: "babsoal", orderBy: "no_bab"},
        {collection: 'tests', }
    ]);
    
    
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
        // console.log(listBabsoal)
        content = listBabsoal.map(bab => (
            <tr key={bab.id}>
                <td>{bab.no_bab}</td>
                <td>{hitungJumlah(bab.list_soal.length)}</td>
                <td>{hitungWaktu(bab.waktu_pengerjaan)}</td>
                <td width="100px">
                    <div className="btn-group" role="group">
                        <Link className="btn btn-sm btn-success border" to={`${currUrl}/bab/${bab.id}`}>
                            <i className="fa fa-eye" aria-hidden="true"></i>
                        </Link>
                        <Link className="btn btn-sm btn-success border" to={`${currUrl}/bab/edit/${bab.id}`}>
                            <i className="fa fa-pencil" aria-hidden="true"></i>
                        </Link>
                        <button className="btn btn-sm btn-success border" onClick={onDelete} id={bab.id}> 
                            <i className="fa fa-trash" aria-hidden="true"></i>
                        </button>
                    </div>
                </td>
            </tr>
        ))
    }
    return (
        <div>
            <h2>Soal {test.name}</h2>
            <br/>
            <Link to={`${currUrl}/bab-add`} className="btn btn-success">
                Tambah soal
                </Link> <br/> <br/>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>No Bab Soal</th>
                        <th>Jumlah Soal</th>
                        <th>Waktu Pengerjaan</th>
                        <th>#</th>
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

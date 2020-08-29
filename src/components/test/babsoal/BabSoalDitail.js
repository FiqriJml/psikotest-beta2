import React from 'react'
import { useSelector } from 'react-redux';
import { selectBabsoalById, selectTestById } from '../testAction';
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import { Link } from 'react-router-dom';
import SoalList from '../soal/SoalList';
import ContohList from '../soal/ContohList';

function BabSoalDitail({match}) {
    const {testId, babId} = match.params

    useFirestoreConnect([
        {collection: 'tests', doc: testId},
        {collection: 'tests', doc: testId, subcollections: [{collection: 'soal', doc: babId}],  storeAs: "babsoal"},
    ]);
    const babsoal = useSelector(state => selectBabsoalById(state, babId))
    const test = useSelector(state => selectTestById(state, testId))
    
    if(!isLoaded(babsoal)){
        return <p>Loading...</p>
    }
    if(isEmpty(babsoal)){
        return <h1 className="text-center">Page Not Found</h1>
    }
    if(!isLoaded(test)){
        return <p>Loading...</p>
    }
    let link_add = ''
    const tipe_soal = babsoal.tipe_soal
    if(tipe_soal === "isian"){
        link_add = tipe_soal + "/"
    }else{
        link_add = ''
    }
    return (
        <div className="row mb-4 pb-4">
            <div className="col-2">
            </div>
            <div className="col-8">
                <h3>Soal {test.name} Bab {babsoal.no_bab}</h3>
                    <span>Tipe Soal: {babsoal.tipe_soal}</span>
                    <p>Waktu Pengerjaan (Durasi): {babsoal.waktu_pengerjaan} menit</p>
                
                <div className="btn-group" role="group">
                    <Link to={`${babId}/${link_add}add-contoh-soal`} className="btn btn-sm btn-secondary">Tambah contoh</Link>
                    <Link to={`${babId}/${link_add}add-soal`} className="btn btn-sm btn-success">Tambah soal</Link>
                </div>
                <br/> <br/>
                <p><b>Contoh Soal:</b></p>
                <ContohList contoh={babsoal.list_contoh}/>
                <br/> 
                <p><b>List Soal:</b></p>
                <SoalList list={babsoal.list_soal}/>
            </div>
            <div className="col-2">
            </div>
        </div>
    )
}

export default BabSoalDitail

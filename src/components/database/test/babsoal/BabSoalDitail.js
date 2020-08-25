import React from 'react'
import { useSelector } from 'react-redux';
import { selectBabsoalById, selectTestById } from '../testAction';
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import { Link } from 'react-router-dom';

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
    // const soalList = babsoal.soalList
    // const contohSoal = babsoal.contoh

    return (
        <div className="row">
            <div className="col-2">
            </div>
            <div className="col-8">
                <h3>Soal {test.name} Bab {babsoal.no_bab}</h3>
                    <p>Waktu Pengerjaan (Durasi): {babsoal.waktu_pengerjaan} menit</p>
                
                <div className="btn-group" role="group">
                    <Link to={`${babId}/add-soal/contoh`} className="btn btn-sm btn-secondary">Tambah contoh</Link>
                    <Link to={`${babId}/add-soal`} className="btn btn-sm btn-success">Tambah soal</Link>
                </div>
                <br/> <br/>
                <p><b>Contoh Soal:</b></p>
                <br/> 
                <p><b>List Soal:</b></p>
            </div>
            <div className="col-2">
            </div>
        </div>
    )
}

export default BabSoalDitail

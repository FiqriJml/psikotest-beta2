import React from 'react'
import Soal1 from './form/Form'
import Soal3 from './form/Soal3'
import AdminTemplate from '../../template/AdminTemplate'
import { addsoal } from '../testAction'

function AddSoal({match}) {
    const {testId, babId, tipe_soal} = match.params
    let form = ''
    if(parseInt(tipe_soal) === 1){
        const data = {
            key: 0,
            soal: "",
            opsi: ["","","","",""],
        }
        form = <Soal1 data={data} action={addsoal} match={match}/>
    }else if(parseInt(tipe_soal) === 3){
        const data = {
            key: "",
            soal: "",
        }
        form = <Soal3 data={data} action={addsoal} match={match}/>
    }
    else{
        form = <p className="alert alert-danger">Tipe Soal Not Found</p>
    }
    const breadcrumbs = [
        { label: "BabSoal", path: testId},
        { label: "Soal", path: `${testId}/bab/${babId}`}
    ]

    return (
        <AdminTemplate 
            breadcrumbs={breadcrumbs}
            content = {form} 
            title="Tambah Soal"
      />   
    )
}

export default AddSoal

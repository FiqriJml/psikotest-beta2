import React from 'react'
import Contoh1 from './form/ContohForm'
import Contoh3 from './form/Contoh3'
import AdminTemplate from '../../template/AdminTemplate'
import { addContohsoal } from '../testAction'

function AddContohSoal({match}) {
    const {testId, babId, tipe_soal} = match.params
    let form = ''
    if(parseInt(tipe_soal) === 1){
        const data = {
            soal: "",
            opsi: ["","","","",""],
        }
        form = <Contoh1 data={data} action={addContohsoal} match={match}/>
    }else if(parseInt(tipe_soal) === 3){
        const data = {
            soal: "",
        }
        form = <Contoh3 data={data} action={addContohsoal} match={match}/>
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
            title="Tambah Contoh Soal"
      />   
    )
}

export default AddContohSoal

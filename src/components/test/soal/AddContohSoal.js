import React from 'react'
import Form from './ContohForm'
import AdminTemplate from '../../template/AdminTemplate'
import { addContohsoal } from '../testAction'

function AddContohSoal({match}) {
    const {testId, babId} = match.params
    const data = {
        soal: "",
        opsi: ["","","","",""],
    }
    const breadcrumbs = [
        { label: "BabSoal", path: testId},
        { label: "Soal", path: `${testId}/bab/${babId}`}
    ]

    return (
        <AdminTemplate 
            breadcrumbs={breadcrumbs}
            content = {
                <Form data={data} action={addContohsoal} match={match}/>
            } 
            title="Tambah Contoh Soal"
      />   
    )
}

export default AddContohSoal

import React from 'react'
import Form from './Form'
import AdminTemplate from '../../../template/AdminTemplate'
import { addsoal } from '../../testAction'

function AddSoalIsian({match}) {
    const {testId, babId} = match.params
    const data = {
        key: "",
        soal: "",
    }
    const breadcrumbs = [
        { label: "BabSoal", path: testId},
        { label: "Soal", path: `${testId}/bab/${babId}`}
    ]

    return (
        <AdminTemplate 
            breadcrumbs={breadcrumbs}
            content = {
                <Form data={data} action={addsoal} match={match}/>
            } 
            title="Tambah Soal"
      />   
    )
}

export default AddSoalIsian

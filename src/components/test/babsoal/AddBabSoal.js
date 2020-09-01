import React from 'react'
import Form from './Form'
import AdminTemplate from '../../template/AdminTemplate'
import { addBabsoal } from '../testAction'

function AddBabSoal({match}) {
    const {testId} = match.params
    const data = {
        no_bab: '',
        tipe_soal: '',
        waktu_pengerjaan: "",
        list_soal: [],
        list_contoh: []
    }
    const breadcrumbs = [
        { label: "BabSoal", path: testId}
    ]

    return (
        <AdminTemplate 
            breadcrumbs={breadcrumbs}
            content = {
                <Form data={data} action={addBabsoal} match={match}/>
            } 
            title="Tambah Bab Soal"
      />   
    )
}

export default AddBabSoal

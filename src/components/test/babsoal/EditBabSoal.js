import React from 'react'
import Form from './Form'
import AdminTemplate from '../../template/AdminTemplate'
import { addBabsoal } from '../testAction'

function AddBabSoal() {
    const data = {
        no_bab: '',
        waktu_pengerjaan: ""
    }
    
    return (
        <AdminTemplate 
            content = {
                <Form data={data} action={ addBabsoal }/>
            } 
            title="Perbarui Bab Soal"
      />   
    )
}

export default AddBabSoal

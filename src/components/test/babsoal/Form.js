import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

export default function Form({data, action, match}) {
    const {testId} = match.params
    const currUrl = `/administrator/tests/${testId}`
    const dispatch = useDispatch()
    const history = useHistory()

    const [no_bab, setno_bab] = useState(data.no_bab)
    const [waktu_pengerjaan, setwaktu_pengerjaan] = useState(data.waktu_pengerjaan || '')
    
    const onChange = (e) => {
        const val = e.target.value
        setno_bab(val)
        data.no_bab = val
    }
    const onChangeWaktu = (e) => {
        const val = e.target.value
        setwaktu_pengerjaan(val)
        data.waktu_pengerjaan = val
    }
    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(action({testId, data}))
        console.log(data)
        history.push(currUrl)
    }
    return (
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="no">No Bab</label>
                <input value={no_bab} onChange={onChange} required type="number" className="form-control" id="no" placeholder="Enter No Bab"/>                
                <label htmlFor="waktu">Waktu Pengerjaan</label>
                <input value={waktu_pengerjaan} onChange={onChangeWaktu} type="number" className="form-control" id="waktu"
                 placeholder="Enter Waktu (satuan menit)"/>
            </div>
            <button className="btn btn-primary">Submit</button>
        </form>
    )
}

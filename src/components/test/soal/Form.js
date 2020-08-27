import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

export default function Form({data, action, match}) {
    const {testId, babId} = match.params
    const currUrl = `/administrator/tests/${testId}/bab/${babId}`
    const dispatch = useDispatch()
    const history = useHistory()

    const [key, setkey] = useState(data.key)
    const [soal, setsoal] = useState(data.soal)
    const [opsi1, setopsi1] = useState(data.opsi[0])
    const [opsi2, setopsi2] = useState(data.opsi[1])
    const [opsi3, setopsi3] = useState(data.opsi[2])
    const [opsi4, setopsi4] = useState(data.opsi[3])
    const [opsi5, setopsi5] = useState(data.opsi[4])

    const funOpsi = []
    funOpsi["opsi1"] = setopsi1
    funOpsi["opsi2"] = setopsi2
    funOpsi["opsi3"] = setopsi3
    funOpsi["opsi4"] = setopsi4
    funOpsi["opsi5"] = setopsi5

    const onEnter = (e) => {
        // enter textarea auto resize
        e.target.style.height = "auto"
        const height = e.target.scrollHeight + 2
        e.target.style.height = height + 'px'
    }

    const onChangeSoal = e => {
        onEnter(e)
        const val = e.target.value
        setsoal(val)
    }
    const onChangeKey = e => {
        const val = parseInt(e.target.value)
        setkey(val)
    }
    const onChangeOpsi = e => {
        onEnter(e)
        const val = e.target.value
        const id = e.target.id
        funOpsi[id](val)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        data = {
            ...data, soal, key,
            opsi: [opsi1,opsi2,opsi3,opsi4,opsi5],
        }
        dispatch(action({testId, babId, data}))
        history.push(currUrl)
    }
    return (
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="soal">Soal</label>
                <textarea value={soal} onChange={onChangeSoal} type="text" className="form-control" id="soal"
                 placeholder="Enter soal"/>
                
                <label htmlFor="opsi1">Opsi A </label>
                <textarea value={opsi1} onChange={onChangeOpsi} type="text" className="form-control" id="opsi1"
                 placeholder="opsi..."/>
                <label htmlFor="opsi2">Opsi B </label>
                <textarea value={opsi2} onChange={onChangeOpsi} type="text" className="form-control" id="opsi2"
                    placeholder="opsi..."/>
                <label htmlFor="opsi3">Opsi C </label>
                <textarea value={opsi3} onChange={onChangeOpsi} type="text" className="form-control" id="opsi3"
                 placeholder="opsi..."/>
                <label htmlFor="opsi4">Opsi D </label>
                <textarea value={opsi4} onChange={onChangeOpsi} type="text" className="form-control" id="opsi4"
                    placeholder="opsi..."/>
                <label htmlFor="opsi5">Opsi E </label>
                <textarea value={opsi5} onChange={onChangeOpsi} type="text" className="form-control" id="opsi5"
                 placeholder="opsi..."/>


                <label htmlFor="no">Kunci Jawaban</label> 
                <select value={key} onChange={onChangeKey} className="form-control" id="kunci_jawaban">
                    <option value="0">A</option>
                    <option value="1">B</option>
                    <option value="2">C</option>
                    <option value="3">D</option>
                    <option value="4">E</option>
                </select>            
            </div>
            <button className="btn btn-primary">Submit</button>
        </form>
    )
}

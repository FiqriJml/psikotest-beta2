import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

export default function Contoh3({data, action, match}) {
    const {testId, babId} = match.params
    const currUrl = `/administrator/tests/${testId}/bab/${babId}`
    const dispatch = useDispatch()
    const history = useHistory()
    const [soal, setsoal] = useState(data.soal)

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

    const onSubmit = (e) => {
        e.preventDefault()
        data = {
            soal
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
            </div>
            <button className="btn btn-primary">Submit</button>
        </form>
    )
}

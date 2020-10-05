import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'

export default function Login() {
    const history = useHistory()
    const [name, setname] = useState('')
    const onSubmit = e => {
        e.preventDefault()
        history.push('tryout/0/contoh')
    }
    const onChange = e => {
        setname(e.target.value)
    }
    return (
        <div>
            <br/><br/><br/> <br/><br/>
            <h1>Psikotes Rumah Hijau</h1>
            <p>Coba Psikotes Online:</p>
            <form onSubmit={onSubmit} >
                <div className="row justify-content-center px-2">
                    <div className="col-xs-10 pr-0">
                        <input value={name} onChange={onChange} className="form-control rounded-0" placeholder="isi nama" type="text"/>
                    </div>
                    <div className="col-xs-2 pl-0">  
                        <button className="btn btn-primary btn-block rounded-0">Mulai</button>
                    </div>
                    <div className="col-12" style={{
                        fontStyle: "italic",
                        color: "#aaa"
                    }}>
                        selamat mencoba
                    </div>
                </div>
            </form>
        </div>
    )
}

import React from 'react'

export default function Login() {
    return (
        <div>
            <h1>Psikotes Rumah Hijau</h1>
            <p>Coba Psikotes Online:</p>
            <div className="d-flex justify-content-center">
                <div className="col-2 pr-0">      
                    <input className="form-control rounded-0" placeholder="isi nama" type="text"/>
                </div>
                <div className="col-1 pl-0">
                    <button className="btn btn-primary float-left rounded-0">Mulai</button>
                </div>
            </div>
        </div>
    )
}

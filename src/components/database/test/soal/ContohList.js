import React from 'react'
import { Link } from 'react-router-dom'

export default function ContohList({contoh}) {
    let no = 1
    let index = 0
    return (
        <div className="border p-4">
            {contoh && contoh.map( item => {
                return(
                    <ContohSoalBox noSoal={no++} key={index++} contohSoal={item}/>
                )
            })}
        </div>
    )
}

function ContohSoalBox({contohSoal, noSoal}) {
    let hrf = "a"
    let index = 1
    const nextChar = () => {
        let n = hrf
        hrf = String.fromCharCode(hrf.charCodeAt(0) + 1);
        return n
    }
    return(
        <div className="soal-box">
            <div className="float-right btn-group">
                <Link to="#" className="btn btn-secondary btn-sm">
                    <i className="fa fa-pencil" aria-hidden="true"></i>
                </Link>
                <button className="btn btn-danger btn-sm">
                    <i className="fa fa-trash" aria-hidden="true"></i>
                </button>
            </div>
            <div className="soal">
                <span>0{noSoal}.</span>
                <span>{contohSoal.soal}</span>
            </div>
            <div className="opsi-box">  
                { contohSoal.opsi && contohSoal.opsi.map(opsi => (
                    <div className="opsi" key={index++}>
                        <span>{nextChar(hrf)}.</span>{opsi}
                    </div>
                ))}
            </div>
        </div>
    )
}

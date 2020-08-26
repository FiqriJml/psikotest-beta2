import React from 'react'
import { Link } from 'react-router-dom'

export default function SoalList({list}) {
    let no = 1
    return (
        <div className="border p-4">
            {list && list.map( soal => {
                return(
                    <SoalBox no={no++} key={no} soal={soal}/>
                )
            })}
        </div>
    )
}

function SoalBox({soal, no}) {
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
                <span>0{no}.</span>
                <span>{soal.soal}</span>
            </div>
            <div className="opsi-box">  
                { soal.opsi && soal.opsi.map(opsi => (
                    <div className="opsi" key={index++}>
                        <span>{nextChar(hrf)}.</span>{opsi}
                    </div>
                ))}
            </div>
        </div>
    )
}

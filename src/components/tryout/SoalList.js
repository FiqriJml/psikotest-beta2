import React from 'react'

export default function SoalList({list}) {
    let no = 1
    return (
        <>
            <br/>
            <br/>
            <div className="border p-4">
                <h5>Soal Psikotes</h5>
                {list && list.map( soal => {
                    return(
                        <SoalBox no={no++} key={no} soal={soal}/>
                    )
                })}
            </div>
        </>
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
            <div className="soal">
                <span>0{no}.</span>
                <span>{soal.soal}</span>
            </div>
            <div className="opsi-box">  
                { soal.opsi && soal.opsi.map(opsi => (
                    <div className="opsi" key={index++}>
                        <input type="radio" name={`opsi${no}`} id={`opsi${no}${index}`}/>
                        <label htmlFor={`opsi${no}${index}`}><span>{nextChar(hrf)}.</span>{opsi}</label>
                    </div>
                ))}
            </div>
        </div>
    )
}

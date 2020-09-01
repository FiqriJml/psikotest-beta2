import React from 'react'

export default function Contoh2({contohSoal, noSoal}) {
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
                <span>0{noSoal}.</span>
                <span>{contohSoal.soal}</span>
            </div>
            <div className="opsi-box" style={{marginTop: "-1.5rem"}}>  
                { contohSoal.opsi && contohSoal.opsi.map(opsi => (
                    <div className="opsi" key={index++}>
                        <span>{nextChar(hrf)}.</span>{opsi}
                    </div>
                ))}
            </div>
        </div>
    )
}
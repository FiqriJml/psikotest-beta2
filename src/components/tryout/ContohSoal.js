import React from 'react'

export default function ContohSoal({contoh}) {
    let no = 1
    let index = 0
    return (
        <>
            <h5 className="text-center">Perhatikan Petunjuk Pengerjaan Soal sebelum Memulai</h5>
            <br/>
            <div className="border p-4">
                <h5>Contoh</h5>
                {contoh && contoh.map( item => {
                    return(
                        <ContohSoalBox noSoal={no++} key={index++} contohSoal={item}/>
                    )
                })}
            </div>
        </>
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

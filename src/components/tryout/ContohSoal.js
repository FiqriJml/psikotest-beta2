import React from 'react'
import { Link } from 'react-router-dom'

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
                    item.no = no++
                    return(
                        <ContohSoalBox key={index++} contohSoal={item}/>
                    )
                })}
            </div>

            <div className="text-center mt-4">
                <Link to="#" className="btn btn-primary"> Selanjutnya</Link>
                <br/> <br/>
                <p><i>klik tombol di atas untuk memulai menjawab soal</i></p>
            </div>
        </>
    )
}

function ContohSoalBox({contohSoal}) {
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
                <span>0{contohSoal.no}.</span>
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

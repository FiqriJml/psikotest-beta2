import React from 'react'

export default function Contoh5({contohSoal}) {
    return(
        <div className="soal-box">
            <p><img style={{maxHeight: 120}} className="img-fluid" alt="opsi soal" src={contohSoal.imgOpsiPath} /></p>
            <div className="pl-4 pr-4 mb-3">
                { contohSoal.soalGroup.map((soal, no) => (
                    <span key={no} className="mr-4">
                        {no+1}. <img style={{maxHeight: 80}} alt="..." src={soal.imgSoalPath}/>
                    </span>
                ))}
            </div>
        </div>
    )
}
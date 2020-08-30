import React from 'react'

export default function Contoh3({contohSoal, noSoal}) {
    return(
        <div className="soal-box">
            <div className="soal">
                <span>0{noSoal}.</span>
                <span>{contohSoal.soal}</span>
            </div>&nbsp;&nbsp;&nbsp;&nbsp;
            <span>0{noSoal}. ....................</span>
        </div>
    )
}
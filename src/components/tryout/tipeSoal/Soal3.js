
import React from 'react'

export default function Soal1({soal, no}) {
    const index = no-1
    return(
        <div className="soal-box">
            <div className="soal">
                <span>0{no}.</span>
                <span>{soal.soal}</span>
            </div>&nbsp;&nbsp;&nbsp;&nbsp;
            <span>0{no}.&nbsp;</span>
            <input type="text" id={index} placeholder=" ............."/>
        </div>
    )
}

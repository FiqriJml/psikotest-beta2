import React from 'react'

export default function Soal5({soal}) {
    
    console.log(soal)
    return(
        <div className="soal-box">
            <p><img style={{maxHeight: 120}} className="img-fluid" alt="opsi soal" src={soal.imgOpsiPath} /></p>
            <div className="pl-4 pr-4 mb-3">
            { soal.soalGroup.map((soal, no) => (
                    <span key={no} className="mr-4">
                        {no+1}. <img style={{maxHeight: 80}} alt="..." src={soal.imgSoalPath}/>
                        &nbsp;&nbsp;&nbsp;
                        <select>
                            <option value="0">a</option>
                            <option value="1">b</option>
                            <option value="2">c</option>
                            <option value="3">d</option>
                            <option value="4">e</option>
                        </select>
                    </span>
                ))}
            </div>
        </div>
    )
}
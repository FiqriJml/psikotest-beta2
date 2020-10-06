
import React from 'react'

export default function Soal4(props) {
    const {soal, no, setAnswer, answer} = props
    const index = no
    const onChange = (e) => {
        answer[no] = e.target.value
        setAnswer(answer)
    }
    return(
        <div className="soal-box">
            <div className="soal">
                <span>0{no+1}.</span>
                <span>{soal.soal}</span>
            </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span>0{no+1}.&nbsp;</span>
            <input type="number" id={index} onChange={onChange} placeholder="00"/>
        </div>
    )
}

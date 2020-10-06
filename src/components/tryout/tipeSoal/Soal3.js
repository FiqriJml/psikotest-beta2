
import React from 'react'

export default function Soal3(props) {
    const {soal, no, setAnswer, answer} = props
    const onChange = (e) => {
        answer[no] = e.target.value
        setAnswer(answer)
        console.log(answer)
    }
    return(
        <div className="soal-box">
            <div className="soal">
                <span>0{no+1}.</span>
                <span>{soal.soal}</span>
            </div>&nbsp;&nbsp;&nbsp;&nbsp;
            <span>0{no+1}.&nbsp;</span>
            <input type="text" id={no} onChange={onChange} placeholder=" ............."/>
        </div>
    )
}

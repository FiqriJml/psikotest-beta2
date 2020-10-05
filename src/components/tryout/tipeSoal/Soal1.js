
import React from 'react'

export default function Soal1(props) {
    const {soal, no, setAnswer, answer} = props
    let hrf = "a"
    const nextChar = () => {
        let n = hrf
        hrf = String.fromCharCode(hrf.charCodeAt(0) + 1);
        return n
    }
    const onChange = (e) => {
        answer[no] = parseInt(e.target.value)
        setAnswer(answer)
    }
    return(
        <div className="soal-box">
            <div className="soal">
                <span>0{no+1}.</span>
                <span>{soal.soal}</span>
            </div>
            <div className="opsi-box">  
                { soal.opsi && soal.opsi.map((opsi, index) => (
                    <div className="opsi" key={index} onChange={onChange}>
                        <input type="radio" name={`opsi${no}`} id={`opsi${no}${index}`} value={index}/>
                        <label htmlFor={`opsi${no}${index}`}><span>{nextChar(hrf)}.</span>{opsi}</label>
                    </div>
                ))}
            </div>
        </div>
    )
}

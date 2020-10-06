import React from 'react'

export default function Soal5(props) {
    const {soal, setAnswer, answer} = props
    
    // console.log(soal)    
    const onChange = (e, no) => {
        answer[no] = parseInt(e.target.value)
        setAnswer(answer)
    }
    return(
        <div className="soal-box">
            <p><img style={{maxHeight: 120}} className="img-fluid" alt="opsi soal" src={soal.imgOpsiPath} /></p>
            <div className="pl-4 pr-4 mb-3">
            { soal.soalGroup.map((soal, no) => (
                    <span key={no} className="mr-4">
                        {no+1}. <img style={{maxHeight: 80}} alt="..." src={soal.imgSoalPath}/>
                        &nbsp;&nbsp;&nbsp;
                        <select onChange={(e) => onChange(e, no)}>
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
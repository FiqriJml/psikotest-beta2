import React from 'react'
import { useState } from 'react'
import ButtonNavigasi from './ButtonNavigasi'
import Soal1 from './tipeSoal/Soal1'
import Soal2 from './tipeSoal/Soal2'
import Soal3 from './tipeSoal/Soal3'
import Soal4 from './tipeSoal/Soal4'
import Soal5 from './tipeSoal/Soal5'

export default function SoalList({list, tipe_soal, next_page, label}) {
    const [answer, setanswer] = useState(new Array(list.length))
    // const [jawaban, setjawaban] = useState({})
    // const test_record = [
    //     {
    //         group: [
    //             {
    //                 answer: [0,0,2,4,2]
    //             }
    //         ]
    //     }
    // ]
    let ListSoal
    if(tipe_soal === 1){
        ListSoal = Soal1
    }
    else if(tipe_soal === 2){
        ListSoal = Soal2
    }
    else if(tipe_soal === 3){
        ListSoal = Soal3
    }
    else if(tipe_soal === 4){
        ListSoal = Soal4
    }
    else if(tipe_soal === 5){
        ListSoal = Soal5
    }else{
        return <></>
    }
    console.log(answer)
    return (
        <>
            <br/>
            <br/>
            <div className="border p-4">
                <h5>Soal Psikotes</h5>
                {list && list.map( (soal, no) => (
                    <ListSoal no={no} key={no} soal={soal} setAnswer={val => setanswer(val)} answer={[].concat(answer)}/>
                ))}
                {/* contoh aja tombol ni */}
                <button>Tombol{answer}</button>
            </div>
            <ButtonNavigasi next_page={next_page} label={label}/>
        </>
    )
}
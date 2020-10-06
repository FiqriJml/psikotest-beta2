import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import ButtonNavigasi from './ButtonNavigasi'
import Soal1 from './tipeSoal/Soal1'
import Soal2 from './tipeSoal/Soal2'
import Soal3 from './tipeSoal/Soal3'
import Soal4 from './tipeSoal/Soal4'
import Soal5 from './tipeSoal/Soal5'
import { saveAnswerPerBab } from './tryoutSlice'

export default function SoalList({list, tipe_soal, next_page, label, no_bab, page}) {
    const [answer, setanswer] = useState(new Array(list.length).fill(null))
    const dispatch = useDispatch()
    let ListSoal
    if(tipe_soal === 1){
        ListSoal = Soal1
    }else if(tipe_soal === 2){
        ListSoal = Soal2
    }else if(tipe_soal === 3){
        ListSoal = Soal3
    }else if(tipe_soal === 4){
        ListSoal = Soal4
    }else if(tipe_soal === 5){
        ListSoal = Soal5
    }else{
        return <></>
    }
    console.log(answer)
    const doDispatch = () => {
        // dispatch data disini
        dispatch(saveAnswerPerBab({answer, no_bab, index:page}))
        console.log("submit data", answer)
    }
    return (
        <>
            <br/>
            <br/>
            <div className="border p-4">
                <h5>Soal Psikotes</h5>
                {list && list.map( (soal, no) => (
                    <ListSoal no={no} key={no} soal={soal} setAnswer={val => setanswer(val)} answer={[].concat(answer)}/>
                ))}
            </div>
            <ButtonNavigasi next_page={next_page} label={label} onSubmit={doDispatch}/>
        </>
    )
}
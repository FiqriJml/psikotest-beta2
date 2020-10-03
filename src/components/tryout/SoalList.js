import React from 'react'
import Soal1 from './tipeSoal/Soal1'
import Soal2 from './tipeSoal/Soal2'
import Soal3 from './tipeSoal/Soal3'
import Soal4 from './tipeSoal/Soal4'
import Soal5 from './tipeSoal/Soal5'

export default function SoalList({list, tipe_soal}) {
    let no = 1
    return (
        <>
            <br/>
            <br/>
            <div className="border p-4">
                <h5>Soal Psikotes</h5>
                {list && list.map( soal => {
                    if(tipe_soal === 1){
                        return(
                            <Soal1 no={no++} key={no} soal={soal}/>
                        )
                    }else if(tipe_soal === 2){
                        return (
                            <Soal2 no={no++} key={no} soal={soal}/>
                        )
                    }else if(tipe_soal === 3){
                        return (
                            <Soal3 no={no++} key={no} soal={soal}/>
                        )
                    }else if(tipe_soal === 4){
                        return (
                            <Soal4 no={no++} key={no} soal={soal}/>
                        )
                    }else if(tipe_soal === 5){
                        return (
                            <Soal5 key={no} soal={soal}/>
                        )
                    }else{
                        return <></>
                    }
                })}
            </div>
        </>
    )
}
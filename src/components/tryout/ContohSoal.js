import React from 'react'
import Contoh1 from './tipeSoal/Contoh1'
import Contoh2 from './tipeSoal/Contoh2'
import Contoh3 from './tipeSoal/Contoh3'
import Contoh4 from './tipeSoal/Contoh4'
import Contoh5 from './tipeSoal/Contoh5'

export default function ContohSoal({contoh, tipe_soal}) {
    let no = 1
    let index = 0
    return (
        <>
            <h5 className="text-center">Perhatikan Petunjuk Pengerjaan Soal sebelum Memulai</h5>
            <br/>
            <div className="border p-4">
                <h5>Contoh</h5>
                {/* menampilkan soal berdasarkan tipe_soal*/}
                {contoh && contoh.map( item => {
                    if(tipe_soal === 1){
                        return(
                            <Contoh1 noSoal={no++} key={index++} contohSoal={item}/>
                        )
                    }else if(tipe_soal === 2){
                        return (
                            <Contoh2 noSoal={no++} key={index++} contohSoal={item}/>
                        )
                    }else if(tipe_soal === 3){
                        return (
                            <Contoh3 noSoal={no++} key={index++} contohSoal={item}/>
                        )
                    }else if(tipe_soal === 4){
                        return (
                            <Contoh4 noSoal={no++} key={index++} contohSoal={item}/>
                        )
                    }else if(tipe_soal === 5){
                        return (
                            <Contoh5 key={index++} contohSoal={item}/>
                        )
                    }else{
                        return <></>
                    }
                })}
            </div>
        </>
    )
}
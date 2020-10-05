import React from 'react'
import ButtonNavigasi from './ButtonNavigasi'
import Contoh1 from './tipeSoal/Contoh1'
import Contoh2 from './tipeSoal/Contoh2'
import Contoh3 from './tipeSoal/Contoh3'
import Contoh4 from './tipeSoal/Contoh4'
import Contoh5 from './tipeSoal/Contoh5'

export default function ContohSoal({contoh, tipe_soal, next_page, label}) {
    let no = 1
    let index = 0
    let ButirContohSoal
    if(tipe_soal === 1){
        ButirContohSoal = Contoh1
    }else if(tipe_soal === 2){
        ButirContohSoal = Contoh2
    }else if(tipe_soal === 3){
        ButirContohSoal = Contoh3
    }else if(tipe_soal === 4){
        ButirContohSoal = Contoh4
    }else if(tipe_soal === 5){
        ButirContohSoal = Contoh5
    }else{
        return <></>
    }
    return (
        <>
            <h5 className="text-center">Perhatikan Petunjuk Pengerjaan Soal sebelum Memulai</h5>
            <br/>
            <div className="border p-4">
                <h5>Contoh</h5>
                {/* menampilkan soal berdasarkan tipe_soal*/}
                {contoh && contoh.map( item => (
                    <ButirContohSoal noSoal={no++} key={index++} contohSoal={item}/>
                ))}
            </div>
            <ButtonNavigasi next_page={next_page} label={label}/>
        </>
    )
}
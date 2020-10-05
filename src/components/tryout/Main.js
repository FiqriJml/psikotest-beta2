import React from 'react'
import ContohSoal from './ContohSoal'
import SoalList from './SoalList'

function Main({data_soal, label, next_page}) {
    const {list_contoh, list_soal, tipe_soal} = data_soal
    let content
    if(label === "contoh"){
        label = "soal"
        content = <ContohSoal contoh={list_contoh} tipe_soal={tipe_soal} next_page={next_page} label={label}/>
    }else if(label === "soal"){
        label = "contoh"
        content = <SoalList list={list_soal} tipe_soal={tipe_soal} next_page={next_page} label={label} />
    }
    // isi
    return (
        <div className="container laman-test">
            {content}
        </div>
    )
}

export default Main

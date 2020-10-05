import React from 'react'
import { useHistory } from 'react-router-dom'
import ContohSoal from './ContohSoal'
import SoalList from './SoalList'

function Main({data_soal, label, next_page}) {
    const {list_contoh, list_soal, tipe_soal} = data_soal
    let content, btnNav

    // content
    if(label === "contoh"){
        label = "soal"
        content = <ContohSoal contoh={list_contoh} tipe_soal={tipe_soal}/>
    }else if(label === "soal"){
        label = "contoh"
        content = <SoalList list={list_soal} tipe_soal={tipe_soal}/>
    }
    
    // btnNav
    const history = useHistory()
    const gotoNextSoal = () =>{
        if(next_page){
            history.push(`/tryout/${next_page}/${label}`)
        }else{
            alert("Soal habis")
        }
    }
    btnNav = <button className="btn btn-success" onClick={gotoNextSoal}>Selanjutnya</button>
    if(!next_page){
        btnNav = <button className="btn btn-secondary" onClick={gotoNextSoal}>Selesai</button>
    }

    // isi
    return (
        <div className="container laman-test">
            {content}
            <div className="text-center mt-4">
                {btnNav}
            </div>
        </div>
    )
}

export default Main

import React from 'react'
import { useHistory } from 'react-router-dom'

function ButtonNavigasi(props) {
    const {next_page, label, onSubmit} = props
    const history = useHistory()
    const gotoNextSoal = () =>{
        // simpan jawaban di db
        if(onSubmit){ onSubmit() }
        if(next_page){
            history.push(`/tryout/${next_page}/${label}`)
        }else{
            alert("Soal habis")
        }
    }
    let btnNav = <button className="btn btn-success" onClick={gotoNextSoal}>Selanjutnya</button>
    if(!next_page){
        btnNav = <button className="btn btn-secondary" onClick={gotoNextSoal}>Selesai</button>
    }
    return (
        <div className="text-center mt-4">
            {btnNav}
        </div>
    )
}

export default ButtonNavigasi

import React from 'react'
import { Link } from 'react-router-dom'

export default function ContohList({contoh, opsi_contoh_src}) {
    let no = 1
    let index = 0
    let list_contoh = ''
    let opsi_gambar = ''
    if(opsi_contoh_src){
        opsi_gambar = <> <img style={{maxHeight: 200}} className="img-fluid" alt="gambar contoh opsi" src={opsi_contoh_src} height="200"/>
        <br/><br/> </>
        list_contoh = contoh && contoh.map( item => {
            return(
                <ContohSoalGambar key={index++} noSoal={no++} contohSoal={item} />
            )
        })
    }else{
        list_contoh = contoh && contoh.map( item => {
            return(
                <ContohSoalBox noSoal={no++} key={index++} contohSoal={item}/>
            )
        })
    }
    return (
        <div className="border p-4">
            {opsi_gambar}
            {list_contoh}
        </div>
    )
}

function ContohSoalGambar({contohSoal, noSoal}){
    return(
        <p>
            {noSoal}. <img style={{maxHeight: 150}} alt="..." src={contohSoal.imgPath}/>
        </p>
    )
}

function ContohSoalBox({contohSoal, noSoal}) {
    let hrf = "a"
    let index = 1
    const nextChar = () => {
        let n = hrf
        hrf = String.fromCharCode(hrf.charCodeAt(0) + 1);
        return n
    }
    return(
        <div className="soal-box">
            <div className="float-right btn-group">
                <Link to="#" className="btn btn-secondary btn-sm">
                    <i className="fa fa-pencil" aria-hidden="true"></i>
                </Link>
                <button className="btn btn-danger btn-sm">
                    <i className="fa fa-trash" aria-hidden="true"></i>
                </button>
            </div>
            <div className="soal">
                <span>0{noSoal}.</span>
                <span>{contohSoal.soal}</span>
            </div>
            <div className="opsi-box">  
                { contohSoal.opsi && contohSoal.opsi.map(opsi => (
                    <div className="opsi" key={index++}>
                        <span>{nextChar(hrf)}.</span>{opsi}
                    </div>
                ))}
            </div>
        </div>
    )
}

import React from 'react'
import { Link } from 'react-router-dom'

export default function ContohList({list, tipe_soal}) {
    const list_soal = list && list.map( (soal, no) => {
        if(tipe_soal === 5){
            return(
                <SoalGambar key={no} no={no+1} opsi={soal}/>
            )
        }else{  
            return(
                <SoalBox key={no} no={no+1} soal={soal}/>
            )
        }
    })
    return (
        <div className="border p-4">
            {list_soal}
        </div>
    )
}
function SoalGambar({opsi}){
    return(<>
        <p><img style={{maxHeight: 150}} className="img-fluid" alt="opsi soal" src={opsi.imgOpsiPath} height="150"/></p>
        <div className="pl-4 pr-4 mb-3">
            { opsi.soalGroup.map((soal, no) => (
                <p key={no}>{no+1}. <img style={{maxHeight: 80}} alt="..." src={soal.imgSoalPath}/></p>
            ))}
        </div>
    </>)
}
function SoalBox({soal, no}) {
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
                <span>0{no}.</span>
                <span>{soal.soal}</span>
            </div>
            <div className="opsi-box">  
                { soal.opsi && soal.opsi.map(opsi => (
                    <div className="opsi" key={index++}>
                        <span>{nextChar(hrf)}.</span>{opsi}
                    </div>
                ))}
            </div>
        </div>
    )
}

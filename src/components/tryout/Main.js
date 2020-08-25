import React, { useEffect, useState } from 'react'
import ContohSoal from './ContohSoal'
import { useSelector, useDispatch } from 'react-redux'
import { fetchSoalAll } from './tryoutSlice'
import SoalList from './SoalList'
import { isEmpty } from 'react-redux-firebase'

function Main() {
    const tryout = useSelector(state => state.tryout.data)
    const tryoutStatus = useSelector(state => state.tryout.status)
    const dispatch = useDispatch()
    
    const [content, setcontent] = useState('')
    const [babSoal, setbabSoal] = useState(0)
    const [lastSoal, setlastSoal] = useState(false)
    const [lastBab, setlastBab] = useState(false)

    useEffect(() => {
        if(tryoutStatus === 'idle'){
            dispatch(fetchSoalAll())
        }
    }, [tryoutStatus, dispatch])
    if(tryoutStatus === 'idle'){
        return <p className="text-center">Loading..</p>
    }
    // mulai dari data soal pertama (index = 0)
    // ambil data list soal dan contoh
    console.log(tryout)
    if(isEmpty(tryout)){
        return <p className="text-center">no data</p>
    }
    const {list_contoh, list_soal} = tryout[babSoal]
    if(tryout.length === 1){
        setlastBab(true)
    }
    if(!content){
        setcontent(
            <ContohSoal contoh={list_contoh}/>
        )
        setlastSoal(false)
    }
    const nextBtnClicked = () => {
        if(!lastSoal){
            setcontent(
                <SoalList list={list_soal}/>
            )
            setlastSoal(true)
        }else{
            if(!lastBab){  
                nextBabSoal()
            }else{
                alert("Ini Soal Terakhir")
            }
        }
    }
    const nextBabSoal = () => {
        setcontent('')
        setbabSoal(babSoal+1)
        if(babSoal +2 === tryout.length){
            setlastBab(true)
        }
    }

    let btnNav = <button onClick={nextBtnClicked} className="btn btn-primary">Selanjutnya</button>
    if(lastBab && lastSoal){
        btnNav = <button onClick={nextBtnClicked} className="btn btn-success">Akhiri</button>
    }

    
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

import React, { useEffect, useState } from 'react'
import ContohSoal from './ContohSoal'
import { useSelector, useDispatch } from 'react-redux'
import { fetchSoalperBab } from './tryoutSlice'
import SoalList from './SoalList'

function Main() {
    const tryout = useSelector(state => state.tryout.data)
    const tryoutStatus = useSelector(state => state.tryout.status)
    const dispatch = useDispatch()
    
    const [content, setcontent] = useState('')

    useEffect(() => {
        if(tryoutStatus === 'idle'){
            dispatch(fetchSoalperBab())
        }
    }, [tryoutStatus, dispatch])
    if(tryoutStatus === 'idle'){
        return <p className="text-center">Loading..</p>
    }
    // ambil data list soal dan contoh
    const {list_contoh, list_soal} = tryout
    if(!content){
        setcontent(
            <ContohSoal contoh={list_contoh}/>
        )
    }
    const nextBtnClicked = () => {
        setcontent(
            <SoalList list={list_soal}/>
        )
    }
    return (
        <div className="container laman-test">
            {content}
            <div className="text-center mt-4">
                <button onClick={nextBtnClicked} className="btn btn-primary"> Selanjutnya</button>
            </div>
        </div>
    )
}

export default Main

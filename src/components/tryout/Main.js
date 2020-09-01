import React, { useEffect, useState } from 'react'
import ContohSoal from './ContohSoal'
import { useSelector, useDispatch } from 'react-redux'
import { fetchSoalAll } from './tryoutSlice'
import SoalList from './SoalList'
import { isEmpty } from 'react-redux-firebase'

function Main({page}) {
    const tryout = useSelector(state => state.tryout.data)
    const tryoutStatus = useSelector(state => state.tryout.status)
    const dispatch = useDispatch()
    
    const [content, setcontent] = useState('')
    const [bab, setbab] = useState(page)
    const [contoh, setcontoh] = useState(true)
    const [lastBab, setlastBab] = useState(false)

    useEffect(() => {
        if(tryoutStatus === 'idle'){
            dispatch(fetchSoalAll())
        }
    }, [tryoutStatus, dispatch])
    if(tryoutStatus === 'idle'){
        return <p className="text-center">Loading..</p>
    }
    if(isEmpty(tryout)){
        return <p className="text-center">no data</p>
    }
    if(bab >= tryout.length){
        setbab(tryout.length - 1)
        console.log(bab)
    }
    const {list_contoh, list_soal, tipe_soal} = tryout[bab]

    if(!content){
        setcontent(<ContohSoal contoh={list_contoh} tipe_soal={tipe_soal}/>)
        setcontoh(true)
    }
    const gotoNextSoal = (e) => {
        if(contoh){
            setcontent( <SoalList list={list_soal} tipe_soal={tipe_soal}/> )
            setcontoh(false) 
        }else{
            gotoNextBab()
        }   
        e.target.blur();
    }
    const gotoNextBab = () =>{
        if(bab >= tryout.length - 1){
            setbab(tryout.length - 1)
            setlastBab(true)
        }else{
            setbab(bab+1)   
            setcontent('')
        }
    }
    const endOfSoal = (e) => {
        alert("soal terakhir")
    }
    let btnNav = <button onClick={gotoNextSoal} className="btn btn-success">Selanjutnya</button>
    if(lastBab){
        btnNav = <button onClick={endOfSoal} className="btn btn-secondary">Finish</button>
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

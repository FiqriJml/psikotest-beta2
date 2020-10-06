import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { isEmpty } from 'react-redux-firebase'
import Main from './Main'
import { fetchSoalAll } from './tryoutSlice'

export default function Tryout({match}) {
    const tryout = useSelector(state => state.tryout.data)
    const tryoutStatus = useSelector(state => state.tryout.status)
    const dispatch = useDispatch()
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
    let {page, label} = match.params
    if(isNaN(page)){page = 0}
    const data_soal = tryout[page]
    // tentukan nextPage
    let next_page = page
    if(label === "soal"){
        next_page = parseInt(page) + 1
    }
    if(next_page === tryout.length){
        next_page = null
        console.log(next_page)
    }
    return (
        <div>
            <Main data_soal={data_soal} label={label} next_page={next_page} page={page}  />
        </div>
    )
}

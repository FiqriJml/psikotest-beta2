import React from 'react'
import ContohSoal from './ContohSoal'
import { useSelector } from 'react-redux'

function Main() {
    const tryout = useSelector(state => state.tryout.data)
    const {contoh} = tryout
    console.log(tryout)
    return (
        <div className="container laman-test">
            <ContohSoal contoh={contoh}/>
        </div>
    )
}

export default Main

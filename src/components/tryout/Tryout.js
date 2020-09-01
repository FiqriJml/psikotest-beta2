import React from 'react'
import Main from './Main'

export default function Tryout({match}) {
    let {page} = match.params
    if(isNaN(page)){page = 0}
    return (
        <div>
            <Main page={page}/>
        </div>
    )
}

import React from 'react'
import AdminTemplate from '../pages/AdminTemplate'
import BabSoalList from '../database/test/BabSoalList'

export default function Admin_BabSoalList({match}) {
    return (
      <AdminTemplate 
        content={
            <BabSoalList match={match}/>
        } 
        title="Soal Test"
      />          
    )
}

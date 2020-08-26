import React from 'react'
import AdminTemplate from '../pages/AdminTemplate'
import BabSoalList from '../test/babsoal/BabSoalList'

export default function AdminBabSoalList({match}) {
    return (
      <AdminTemplate 
        content={
            <BabSoalList match={match}/>
        } 
        title="Soal Test"
      />          
    )
}

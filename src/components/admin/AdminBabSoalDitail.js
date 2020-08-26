import React from 'react'
import AdminTemplate from '../pages/AdminTemplate'
import BabSoalDitail from '../test/babsoal/BabSoalDitail'

export default function AdminBabSoalDitail({match}) {
    return (
      <AdminTemplate 
        content={
            <BabSoalDitail match={match}/>
        } 
        title="Soal Test"
      />          
    )
}

import React from 'react'
import AdminTemplate from '../template/AdminTemplate'
import BabSoalDitail from '../test/babsoal/BabSoalDitail'

export default function AdminBabSoalDitail({match}) {
    const {testId} = match.params
    console.log(testId)
    const breadcrumbs = [
        { label: "BabSoal", path: testId}
    ]
    return (
      <AdminTemplate 
        breadcrumbs={breadcrumbs}
        content={
            <BabSoalDitail match={match}/>
        } 
        title="Soal Test"
      />          
    )
}

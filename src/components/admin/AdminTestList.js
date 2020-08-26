import React from 'react'
import AdminTemplate from '../pages/AdminTemplate'
import { TestsList } from '../test/TestList'
export default function AdminTestList() {
    return (
      <AdminTemplate 
        content={
            <TestsList/>
        } 
        title="Soal Test"
      />          
    )
}

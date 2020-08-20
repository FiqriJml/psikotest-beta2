import React from 'react'
import { Link } from 'react-router-dom'
import { TestsList } from '../database/test/TestList'

export default function Admin() {
    return (
        <div className="container">  
            <nav>
                <ul>
                    <li><Link to="#"  className="btn">test</Link></li>
                </ul>
            </nav>
            <h2 className="text-center">Tests List</h2>
            <TestsList/>
        </div>
    )
}

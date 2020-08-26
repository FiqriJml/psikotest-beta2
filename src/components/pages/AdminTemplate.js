import React from 'react'
// import { TestsList } from '../database/test/TestList'
import { Link } from 'react-router-dom'

export default function AdminTemplate({content, title}) {
    const pathTo = "/administrator/tests"
    return (
        <div className="main">
            <div className="sidenav">
                <h6 className="sidenav-title">Rumah Hijau</h6>
                <div>
                    <Link to={pathTo}>Tests</Link>
                </div>
            </div>
            <div className="body"> 
                <nav className="navbar navbar-expand-lg">
                    <Link to="/administrator">Home</Link>&nbsp;
                    /&nbsp;&nbsp;<Link to="/administrator/tests">Tests</Link>&nbsp;
                    <ul className="mx-auto"></ul>
                    <div>
                        <Link className="btn" to="#">
                            <i className="fa fa-sign-out" aria-hidden="true"></i> Logout
                        </Link>
                    </div>
                </nav> 
                <div className="wrapper"> 
                    <div className="table-title border">
                        {title}
                    </div>   
                    <main className="">
                        {content}
                    </main>
                </div>    
            </div>
        </div>
    )
}

import React from 'react'
import { useSelector } from 'react-redux'
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase'
import { Link } from 'react-router-dom'

export const TestsList = () => {
    useFirestoreConnect({
        collection: 'tests'
    });
    const pathTo = "/administrator/tests";
    const tests = useSelector(state => state.firestore.ordered.tests)
    const data = tests;
    
    const onDelete = (e) => {
        // const testId = e.target.id
    }
    if (!isLoaded(data)) return 'Loading...';
    console.log(data)
    let content
    const renderTests = tests.map(test => (
            <tr key={test.id}>
                <td>{test.name}</td>
                <td>{test.author}</td>
                <td></td>
                <td></td>
                <td style={{ 
                    whiteSpace:"nowrap",
                    width: "90px"
                }}>
                        <Link className="btn btn-sm btn-success border" to={`${pathTo}/${test.id}`}>
                            <i className="fa fa-eye" aria-hidden="true"></i>
                        </Link>
                        <Link className="btn btn-sm btn-success border" to={`${pathTo}/edit/${test.id}`}>
                            <i className="fa fa-pencil" aria-hidden="true"></i>
                        </Link>
                        <button className="btn btn-sm btn-success border" onClick={onDelete} id={test.id}> 
                            <i className="fa fa-trash" aria-hidden="true"></i>
                        </button>
                </td>
            </tr>
        )
    )
    content = renderTests
    if (isEmpty(data)) content = (<tr><td colSpan="3">No data</td></tr>)
    return (
        <div>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Nama Test</th>
                        <th>Pengarang</th>
                        <th>Total Soal</th>
                        <th>Total Halaman Soal</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {content}
                </tbody>   
            </table>
        </div>
    )
}
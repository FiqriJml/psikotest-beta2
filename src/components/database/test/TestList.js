import React from 'react'
import { useSelector } from 'react-redux'
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase'
import { Link } from 'react-router-dom'

export const TestsList = () => {
    useFirestoreConnect({
        collection: 'tests'
    });
    const tests = useSelector(state => state.firestore.ordered.tests)
    const data = tests;
    
    const onDelete = (e) => {
        // const testId = e.target.id
    }
    if (!isLoaded(data)) return 'Loading...';
    let content
    const renderTests = tests.map(test => (
            <tr key={test.id}>
                <td>{test.name}</td>
                <td>{test.author}</td>
                <td width="100px">
                    <div className="btn-group" role="group">
                        <Link className="btn btn-secondary" to={`tests/${test.id}`}>View</Link>
                        <Link className="btn btn-success" to={`tests/edit/${test.id}`}>Edit</Link>
                        <button className="btn btn-danger" onClick={onDelete} id={test.id}>Del</button>
                    </div>
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
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>
                    {content}
                </tbody>   
            </table>
        </div>
    )
}
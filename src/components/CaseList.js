import {useEffect, useState} from "react";
import caseService from '../service/case-service.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

const CaseList = () => {

    const [allCases, setAllCases]  =useState([]);

    useEffect( () => {
        caseService.getAll()
            .then(response =>{
                console.log("Printing all cases:", response.data);
                setAllCases(response.data);
            })
            .catch(error =>{
                console.log('Something went wrong', error);
            })
    }, []);

    return (
        <div className="container">
            <h2>List of All Cases</h2>
            <hr/>
            <div>
                <Link to={"/add"} className="btn btn-primary mb-2">Add new Case</Link>
                
                <table className='table table-bordered table-striped'>
                    <thead className="thead-dark">
                    <tr>
                        <th>case number</th>
                        <th>year of case</th>
                        <th>applicants</th>
                        <th>defendants</th>
                        <th>is closed</th>
                        <th>description</th>
                        <th>is CA filed</th>
                        <th>final Decision Date</th>
                        <th>next Hearing Date</th>
                        <th>resolution</th>    
                    </tr>
                    </thead>
                    <tbody onClick={handleClick}>
                    {
                        allCases.map(
                            cases => (
                                <tr key={cases.id}>
                                    <td>{cases.caseNumber}</td>
                                    <td>{cases.yearOfCase}</td>
                                    <td>{cases.applicants}</td>
                                    <td>{cases.defendants}</td>
                                    <td>{cases.isClosed}</td>
                                    <td>{cases.description}</td>
                                    <td>{cases.isCAfiled}</td>
                                    <td>{cases.finalDecisionDate}</td>
                                    <td>{cases.nextHearingDate}</td>
                                    <td>{cases.resolution}</td>
                                </tr>
                            )
                        )
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

function handleClick(){
}

export default CaseList;















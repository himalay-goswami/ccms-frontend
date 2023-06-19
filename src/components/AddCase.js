import { useState } from "react"
import caseService from "../service/case-service";
import {useNavigate} from "react-router-dom";


const AddCase =() => {

    const [caseId, setCaseId] = useState('');
    const [caseNumber, setCaseNumber] = useState('');
    const [yearOfCase, setYearOfCase] = useState('');
    const [applicants, setApplicants] = useState('');
    const [defendants, setdefendants] = useState('');
    const [isClosed, setIsClosed] = useState('');
    const [description, setDescription] = useState('');
    const [isCAfiled, setIsCAfiled] = useState('');
    const [finalDecisionDate, setFinalDecisionDate] = useState('');
    const [nextHearingDate, setNextHearingDate] = useState('');
    const [resolution, setResolution] = useState('');
    const history = useNavigate();
    


    const addCase = (e) => {
        e.preventDefault();

        const newCase = {caseId, caseNumber, yearOfCase, applicants, defendants, isClosed, description,
        isCAfiled, finalDecisionDate, nextHearingDate, resolution};
        caseService.addCase(newCase)
        .then(response => {
            console.log("Saved succesfully", response.data);
            history("/");
        })
        .catch(error => {
            console.log("Something went wrong", error);
        })  
    } 

    

    return(
        <div className="container">
            <h2>Add new case</h2>
            <hr/>
            <form>
                <div className="form-group">

                    <div className="form-group">
                    <input type="number" className="form-control col-4" id="caseId" value={caseId} onChange={(e) => setCaseId(e.target.value)} placeholder="Enter ID"/>
                    </div>

                    <div className="form-group"><input type="number" className="form-control col-4" id="caseNumber" value={caseNumber} onChange={(e) => setCaseNumber(e.target.value)} placeholder="Enter case number"/>
                    </div>
                    <div className="form-group"><input type="number" className="form-control col-4" id="yearOfcase" value={yearOfCase} onChange={(e) => setYearOfCase(e.target.value)} placeholder="Enter year of case"/>
                    </div>
                    <div className="form-group"><input type="text" className="form-control col-4" id="applicants" value={applicants} onChange={(e) => setApplicants(e.target.value)} placeholder="Enter applicants name"/>
                    </div>
                    <div className="form-group"><input type="text" className="form-control col-4" id="defendants" value={defendants} onChange={(e) => setdefendants(e.target.value)} placeholder="Enter defendants"/>
                    </div>
                    <div className="form-group"><input type="text" className="form-control col-4" id="isClosed" value={isClosed} onChange={(e) => setIsClosed(e.target.value)} placeholder="is closed?"/>
                    </div>
                    <div className="form-group"><input type="text" className="form-control col-4" id="description" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Enter description"/>
                    </div>
                    <div className="form-group"><input type="text" className="form-control col-4" id="isCAfiled" value={isCAfiled} onChange={(e) => setIsCAfiled(e.target.value)} placeholder="is CA filed?"/>
                    </div>
                    <div className="form-group"><input type="text" className="form-control col-4" id="finalDecisionDate" value={finalDecisionDate} onChange={(e) => setFinalDecisionDate(e.target.value)} placeholder="Enter final date"/>
                    </div>
                    <div className="form-group"><input type="text" className="form-control col-4" id="nextHearingDate" value={nextHearingDate} onChange={(e) => setNextHearingDate(e.target.value)} placeholder="Enter next date"/>
                    </div>
                    <div className="form-group"><input type="text" className="form-control col-4" id="resolution" value={resolution} onChange={(e) => setResolution(e.target.value)} placeholder="Enter resolution"/>
                </div>


                    
                    </div>
                <div>
                    <button className="btn btn-primary" onClick={(e) => addCase(e)}>Save</button>
                </div>
            </form>
        </div>

    )
}

export default AddCase;
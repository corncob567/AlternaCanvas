import React, { useState } from "react";
import "../../../styles/main.scss";
import BackArrow from "../../../assets/backArrow";
import { useNavigate } from "react-router-dom";

const AssignmentPage = ({ assignmentID, assignmentName, dueDate, dueTime }) => {
  const [requestExtension, setRequestExtension] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [uploadType, setUploadType] = useState('file');
  const [renderSubmit, setRenderSubmit] = useState(false);

  const clickSubmit = () => {
    if (renderSubmit === true) {
        setSubmitted(true)
        setRenderSubmit(false)
    }
    else {
        setRenderSubmit(true);
    }
  }
  const navigate = useNavigate();

  return (
    <div className="assignmentPage">
        <div className="backArrow" onClick={() => navigate(-1)}>
            <BackArrow/>
        </div>
        <div className="assignmentPage--header">
            <h1>
            {assignmentName}
            </h1>
            <p style={{ fontStyle: "italic", fontWeight: "200" }}>
            {dueDate} @ {dueTime}
            </p>
            <div className="assignmentPage--buttonWrapper">
            {submitted ? '' : 
                <>
                    <button className="button secondary">Download Files</button>
                    <button
                        className={`button ${requestExtension ? "extension" : "secondary"}`}
                        onClick={() => setRequestExtension(true)}
                    >
                        {requestExtension ? "Requested!" : "Request Extension"}
                    </button>
                </>}
            <button
                className={`button ${submitted ? "submitted" : "primary"}`}
                onClick={() => clickSubmit()}
            >
                {submitted ? "Submitted!" : "Submit Assignment"}
            </button>
            </div>
        </div>
        <div className="assignmentPage--description">
            <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
            sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
            rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
            ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
            dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
            et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
            takimata sanctus est Lorem ipsum dolor sit amet.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
            sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
            rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
            ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
            dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
            et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
            takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
            amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
            invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
            At vero eos et accusam et justo duo dolores et ea rebu et dolore magna
            aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
            dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
            sanctus est Lorem ipsum dolor sit amet.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
            sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
            rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
            ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
            dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
            et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
            takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
            amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
            invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
            kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
            amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
            diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. met. Lorem ipsum dolor sit amet,
            consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
            labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
            et accusam et justo duo dolores et ea rebum. Stet clita kasd
            gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
            sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
            rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
            ipsum dolor sit amet.
            </p>
        </div>
        {renderSubmit ? 
            <div className="assignmentPage--submission-container">
                <div className="assignmentPage--submission">
                    <div className="assignmentPage--submission-tabs">
                        <div className={`assignmentPage--submission-tab ${uploadType ==='file' ? 'active' : ''}`} onClick={() => setUploadType("file")}>
                            Upload file
                        </div>
                        <div className={`assignmentPage--submission-tab ${uploadType ==='text' ? 'active' : ''}`} onClick={() => setUploadType("text")}>
                            Text Entry
                        </div>
                    </div>
                    <div className="assignmentPage--submissionFormat">
                        {uploadType === 'text' ? 
                            <>
                                <label for='textSubmit'>Enter text here: </label><input className="assignmentPage--submissionText" id='textSubmit' type='text'/>
                            </>
                            : <><label for='uploadSubmit'>Select file </label><button className="button upload" id="uploadSubmit">Upload</button></>}
                    </div>
                </div>
            </div> : ''}
    </div>
  );
};

export default AssignmentPage;

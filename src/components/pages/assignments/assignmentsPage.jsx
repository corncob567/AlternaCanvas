import React from "react";
import "../../../styles/main.scss";
import backArrow from '../../../assets/backArrow';

const AssignmentPage = ({ assignmentID, assignmentName, dueDate, dueTime }) => {
  return (
    <div className="pageWrapper assignmentPage">
        <backArrow/>
        <div className="assignmentPage--header">
            <h1>
            {assignmentName}
            </h1>
            <p style={{ fontStyle: "italic", fontWeight: '200' }}>
            {dueDate} @ {dueTime}
            </p>
            <div className="assignmentPage--buttonWrapper">
                <button className="button secondary">Download Files</button>
                <button className="button secondary">Request Extension</button>
                <button className="button primary">Submit Assignment</button>
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
    </div>
  );
};

export default AssignmentPage;

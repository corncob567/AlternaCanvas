import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../../../styles/main.scss";
import { MdAssignment } from "react-icons/md";
import Assignment from "./Assignment";
import { useOutletContext } from "react-router";

const Assignments = props => {
  const courseId = props.courseId;
  const [user, courseInfo] = useOutletContext();

  const location = useLocation();
  const currentCourse = location.pathname.split("/")[1];

  return (
    <div className="pageWrapper">
      <h1 className="pageTitle">
        Assignments <MdAssignment />
      </h1>
      <div className="assignments--assignmentList">
        {courseInfo[currentCourse].assignments.map(assign => {
          return (
            <Link
              to={`${assign.id}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <Assignment
                assignmentID={assign.id}
                assignmentName={assign.name}
                dueDate={assign.dueDate}
                dueTime={assign.dueTime}
                setChatData={props.setChatData}
                user={user}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Assignments;

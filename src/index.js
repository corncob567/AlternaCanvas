import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Syllabus from "./components/pages/syllabus/Syllabus";
import Assignments from "./components/pages/assignments/assignments";
import Modules from "./components/pages/modules/modules";
import Announcements from "./components/pages/announcements/announcements";
import Grades from "./components/pages/grades/grades";
import AssignmentPage from "./components/pages/assignments/assignmentsPage";
import Zoom from "./components/pages/zoom/zoom";

import "bootstrap/dist/css/bootstrap.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
const courseInfo = ({
  compg: {
    courseName: "Computer Graphics",
    courseProfessor: "Dr. Bingus",
    courseImg: "compgraphics.png",
    assignments: [{
      id: 1,
      name: "Assignment 1",
      dueDate: "November 14",
      dueTime: "11:59PM",
      submitted: false
    },{
      id: 2,
      name: "Assignment 2",
      dueDate: "November 21",
      dueTime: "11:59PM",
      submitted: false
    },{
      id: 3,
      name: "Assignment 3",
      dueDate: "November 29",
      dueTime: "11:59PM",
      submitted: false
    }
  ]},
  ui: {
    courseName: "User Interface Design",
    courseProfessor: "Dr. Aurisano",
    courseImg: "uiux.png",
    assignments: [{
      id: 1,
      name: "React Tutorial",
      dueDate: "November 1",
      dueTime: "1:30PM",
      submitted: true
    },{
      id: 2,
      name: "React Webpage 1",
      dueDate: "November 12",
      dueTime: "2:30PM",
      submitted: true
    },{
      id: 3,
      name: "React Webpage 2",
      dueDate: "November 17",
      dueTime: "2:30PM",
      submitted: false
    },{
      id: 4,
      name: "React Final Project",
      dueDate: "November 28",
      dueTime: "11:59PM",
      submitted: false
    }
  ]},
  seniordesign: {
    courseName: "Senior Design",
    courseProfessor: "Dr. Professor",
    courseImg: "uiux.png",
    assignments: [{
      id: 1,
      name: "Proposal and Groups",
      dueDate: "September 3",
      dueTime: "11:59PM",
      submitted: true
    },{
      id: 2,
      name: "Concept Designs",
      dueDate: "October 3",
      dueTime: "11:59PM",
      submitted: true
    },{
      id: 3,
      name: "Prototype A",
      dueDate: "October 24",
      dueTime: "11:59PM",
      submitted: true
    },{
      id: 4,
      name: "Advisor Review",
      dueDate: "October 31",
      dueTime: "11:59PM",
      submitted: true
    },{
      id: 5,
      name: "User Interviews",
      dueDate: "November 13",
      dueTime: "11:59PM",
      submitted: true
    },{
      id: 6,
      name: "Prototype B",
      dueDate: "December 2",
      dueTime: "11:59PM",
      submitted: false
    }
  ]},
});

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate replace to="/ui/syllabus" />} />
      <Route path="/compg" element={<App />}>
        <Route
          exact
          path="syllabus"
          element={<Syllabus courseId={"compg"} />}
        />
        <Route
          path="assignments"
          element={<Assignments courseId={"compg"} />}
        />
        {courseInfo["compg"].assignments.map((assign) => {
          return (
            <Route exact path={`assignments/${assign.id}`} element={<AssignmentPage assignmentID={assign.id} assignmentName={assign.name} dueDate={assign.dueDate} dueTime={assign.dueTime} submitted={assign.submitted} />}/>
          );
        })}
        <Route path="modules" element={<Modules courseId={"compg"} />} />
        <Route
          path="announcements"
          element={<Announcements courseId={"compg"} />}
        />
        <Route path="grades" element={<Grades courseId={"compg"} />} />
        <Route path="zoom" element={<Zoom courseId={"compg"} />} />
      </Route>
      <Route path="/ui" element={<App />}>
        <Route exact path="syllabus" element={<Syllabus courseId={"ui"} />} />
        <Route exact path="assignments" element={<Assignments courseId={"ui"} />}/>
        {courseInfo["ui"].assignments.map((assign) => {
          return (
            <Route exact path={`assignments/${assign.id}`} element={<AssignmentPage assignmentID={assign.id} assignmentName={assign.name} dueDate={assign.dueDate} dueTime={assign.dueTime} submitted={assign.submitted} />}/>
          );
        })}
        <Route path="modules" element={<Modules courseId={"ui"} />} />
        <Route path="announcements" element={<Announcements courseId={"ui"} />}/>
        <Route path="grades" element={<Grades courseId={"ui"} />} />
        <Route path="zoom" element={<Zoom courseId={"ui"} />} />
      </Route>
      <Route path="/seniordesign" element={<App />}>
        <Route
          exact
          path="syllabus"
          element={<Syllabus courseId={"seniordesign"} />}
        />
        <Route
          path="assignments"
          element={<Assignments courseId={"seniordesign"} />}
        />
        {courseInfo["seniordesign"].assignments.map((assign) => {
          return (
            <Route exact path={`assignments/${assign.id}`} element={<AssignmentPage assignmentID={assign.id} assignmentName={assign.name} dueDate={assign.dueDate} dueTime={assign.dueTime} submitted={assign.submitted} />}/>
          );
        })}
        <Route path="modules" element={<Modules courseId={"seniordesign"} />} />
        <Route
          path="announcements"
          element={<Announcements courseId={"seniordesign"} />}
        />
        <Route path="grades" element={<Grades courseId={"seniordesign"} />} />
        <Route path="zoom" element={<Zoom courseId={"seniordesign"} />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

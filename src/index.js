import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Syllabus from './components/pages/syllabus/Syllabus';
import Assignments from './components/pages/assignments/Assignments';
import Modules from './components/pages/modules/modules';
import Announcements from './components/pages/announcements/announcements';
import Grades from './components/pages/grades/grades';
import AssignmentPage from './components/pages/assignments/AssignmentsPage';
import Zoom from './components/pages/zoom/zoom';

import 'bootstrap/dist/css/bootstrap.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate replace to="/ui/syllabus" />} />
      <Route path="/compg" element={<App/>} >
        <Route exact path="syllabus" element={<Syllabus courseId={'compg'}/>}/>
        <Route path="assignments" element={<Assignments courseId={'compg'}/>}/>
        <Route path="modules" element={<Modules courseId={'compg'}/>}/>
        <Route path="announcements" element={<Announcements courseId={'compg'}/>}/>
        <Route path="grades" element={<Grades courseId={'compg'}/>}/>
        <Route path="zoom" element={<Zoom courseId={'compg'}/>}/>
      </Route>
      <Route path="/ui" element={<App/>} >
        <Route exact path="syllabus" element={<Syllabus courseId={'ui'}/>}/>
        <Route exact path="assignments" element={<Assignments courseId={'ui'}/>}/>
        <Route exact path="assignments/1" element={<AssignmentPage assignmentID="1" assignmentName="Assignment 1" dueDate="November 16" dueTime="11:59PM"/>}/>
        <Route exact path="assignments/2" element={<AssignmentPage assignmentID="2" assignmentName="Assignment 2" dueDate="November 17" dueTime="11:59PM"/>}/>
        <Route path="modules" element={<Modules courseId={'ui'}/>}/>
        <Route path="announcements" element={<Announcements courseId={'ui'}/>}/>
        <Route path="grades" element={<Grades courseId={'ui'}/>}/>
        <Route path="zoom" element={<Zoom courseId={'ui'}/>}/>
      </Route>
      <Route path="/seniordesign" element={<App/>} >
        <Route exact path="syllabus" element={<Syllabus courseId={'seniordesign'}/>}/>
        <Route path="assignments" element={<Assignments courseId={'seniordesign'}/>}/>
        <Route path="modules" element={<Modules courseId={'seniordesign'}/>}/>
        <Route path="announcements" element={<Announcements courseId={'seniordesign'}/>}/>
        <Route path="grades" element={<Grades courseId={'seniordesign'}/>}/>
        <Route path="zoom" element={<Zoom courseId={'seniordesign'}/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
);
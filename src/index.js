import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Syllabus from './components/pages/syllabus/syllabus';
import Assignments from './components/pages/assignments/assignments';
import Modules from './components/pages/modules/modules';
import Announcements from './components/pages/announcements/announcements';
import Grades from './components/pages/grades/grades';
import CourseNav from './components/navigation/CourseNav';

import 'bootstrap/dist/css/bootstrap.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<App />} >
        <Route path='compg' element={<CourseNav courseId='compg'></CourseNav>}>
          <Route path="compg/syllabus" element={<Syllabus courseId={'seniordesign'}/>}/>
          <Route path="assignments" element={<Assignments courseId={'compg'}/>}/>
          <Route path="modules" element={<Modules courseId={'compg'}/>}/>
          <Route path="announcements" element={<Announcements courseId={'compg'}/>}/>
          <Route path="grades" element={<Grades courseId={'compg'}/>}/>
        </Route>
        </Route>
    </Routes>
  </BrowserRouter>
);
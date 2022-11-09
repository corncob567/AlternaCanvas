import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Syllabus from './components/pages/syllabus/syllabus';
import Assignments from './components/pages/assignments/assignments';
import Modules from './components/pages/modules/modules';
import Announcements from './components/pages/announcements/announcements';
import Grades from './components/pages/grades/grades';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<App />} >
            <Route path="syllabus" element={<Syllabus/>}/>
            <Route path="assignments" element={<Assignments/>}/>
            <Route path="modules" element={<Modules/>}/>
            <Route path="announcements" element={<Announcements/>}/>
            <Route path="grades" element={<Grades/>}/>
        </Route>
    </Routes>
  </BrowserRouter>
);
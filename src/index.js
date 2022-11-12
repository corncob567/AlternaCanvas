import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Syllabus from './components/pages/syllabus/Syllabus';
import Assignments from './components/pages/assignments/assignments';
import Modules from './components/pages/modules/modules';
import Announcements from './components/pages/announcements/announcements';
import Grades from './components/pages/grades/grades';

import 'bootstrap/dist/css/bootstrap.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
        <Route path="/compg" element={<App/>} >
          <Route exact path="syllabus" element={<Syllabus courseId={'compg'}/>}/>
          <Route path="assignments" element={<Assignments courseId={'compg'}/>}/>
          <Route path="modules" element={<Modules courseId={'compg'}/>}/>
          <Route path="announcements" element={<Announcements courseId={'compg'}/>}/>
          <Route path="grades" element={<Grades courseId={'compg'}/>}/>
        </Route>
        <Route path="/ui" element={<App/>} >
          <Route exact path="syllabus" element={<Syllabus courseId={'ui'}/>}/>
          <Route path="assignments" element={<Assignments courseId={'ui'}/>}/>
          <Route path="modules" element={<Modules courseId={'ui'}/>}/>
          <Route path="announcements" element={<Announcements courseId={'ui'}/>}/>
          <Route path="grades" element={<Grades courseId={'ui'}/>}/>
        </Route>
        <Route path="/seniordesign" element={<App/>} >
          <Route exact path="syllabus" element={<Syllabus courseId={'seniordesign'}/>}/>
          <Route path="assignments" element={<Assignments courseId={'seniordesign'}/>}/>
          <Route path="modules" element={<Modules courseId={'seniordesign'}/>}/>
          <Route path="announcements" element={<Announcements courseId={'seniordesign'}/>}/>
          <Route path="grades" element={<Grades courseId={'seniordesign'}/>}/>
        </Route>
    </Routes>
  </BrowserRouter>
);
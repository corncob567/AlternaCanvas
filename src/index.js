import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Syllabus from './components/pages/syllabus/Syllabus';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<App />} >
            <Route path="syllabus" element={<Syllabus/>}/>
        </Route>
    </Routes>
  </BrowserRouter>
);
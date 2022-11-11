import './App.css';
import { Outlet } from 'react-router-dom';
import React from 'react';
import CourseNav from './components/navigation/CourseNav';
import CourseSelector from './components/navigation/CourseSelector';
import ChatWindow from './components/chat/ChatWindow'

const App = () => {
    return (
        <div className='App'>
            <div className='courseSelector--container'>
              <CourseSelector/>
            </div>
            <div className='courseNav--container'>
              <CourseNav/>
            </div>
            <div className='pageOutletWrapper'>
              <Outlet/>
            </div>
            <div className='chatColumn'>
              <ChatWindow/>
            </div>
        </div>
    );
} 

export default App;

import './styles/main.scss';
import { Outlet } from 'react-router-dom';
import React, { useState }  from 'react';
import CourseNav from './components/navigation/CourseNav';
import CourseSelector from './components/navigation/CourseSelector';
import ChatWindow from './components/chat/ChatWindow'

function App() {

  const [activeCourse, setActiveCourse] = useState('default');

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

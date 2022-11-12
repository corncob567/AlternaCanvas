import './styles/main.scss';
import { Outlet } from 'react-router-dom';
import React, { useState }  from 'react';
import CourseSelector from './components/navigation/CourseSelector';
import ChatWindow from './components/chat/ChatWindow'

function App() {

  const [activeCourse, setActiveCourse] = useState('compg');
  const [courseInfo, setCourseInfo] = 
    useState({'compg': {courseName: 'Computer Graphics', courseProfessor: 'Dr. Bingus', courseImg: 'compgraphics.png'}, 
              'ui': {courseName: 'User Interface Design', courseProfessor: 'Dr. Aurisano', courseImg: 'uiux.png'}});

  return (
      <div className='App'>
          <div className='courseSelector--container'>
            <CourseSelector activeCourse={activeCourse} setActiveCourse={setActiveCourse} courseInfo={courseInfo}/>
          </div>
          {/* <div className='courseNav--container'>
            <CourseNav activeCourse={activeCourse} setActiveCourse={setActiveCourse}/>
          </div> */}
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

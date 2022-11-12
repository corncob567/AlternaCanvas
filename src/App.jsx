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

  const [chatData, setChatData] = useState({
    "liz": {"data": [{"content":"test1", "author": "false"}, {"content":"test2", "author": "true"}]},
    "daniel": {"data": [{"content":"test3", "author": "false"}, {"content":"test4", "author": "true"}]},
    "alex": {"data": [{"content":"test5", "author": "false"}, {"content":"test6", "author": "true"}]},
  })

  let [currChatName, setCurrChatName] = useState('liz');

  return (
      <div className='App'>
          <div className='courseSelector--container'>
            <CourseSelector activeCourse={activeCourse} setActiveCourse={setActiveCourse} courseInfo={courseInfo}/>
          </div>
          <div className='pageOutletWrapper'>
            <Outlet/>
          </div>
          <div className='chatColumn'>
            <ChatWindow currChatData={chatData[currChatName]} currChatName={currChatName} setChatData={setChatData}/>
          </div>
      </div>
  );
} 

export default App;

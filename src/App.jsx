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
    "baru": {
      "liz": {"data": [{"content":"test1", "author": "liz"}, {"content":"test2", "author": "baru"}], "type": "dm"},
      "daniel": {"data": [{"content":"test3", "author": "daniel"}, {"content":"test4", "author": "baru"}], "type": "dm"},
      "alex": {"data": [{"content":"test5", "author": "alex"}, {"content":"test6", "author": "baru"}], "type": "dm"},
    },
    "liz": {
      "baru": {"data": [{"content":"test1", "author": "baru"}, {"content":"test2", "author": "liz"}], "type": "dm"},
      "daniel": {"data": [{"content":"test3", "author": "daniel"}, {"content":"test4", "author": "liz"}], "type": "dm"},
      "alex": {"data": [{"content":"test5", "author": "alex"}, {"content":"test6", "author": "liz"}], "type": "dm"},
    },
    "daniel": {
      "liz": {"data": [{"content":"test1", "author": "liz"}, {"content":"test2", "author": "daniel"}], "type": "dm"},
      "baru": {"data": [{"content":"test3", "author": "baru"}, {"content":"test4", "author": "daniel"}], "type": "dm"},
      "alex": {"data": [{"content":"test5", "author": "alex"}, {"content":"test6", "author": "daniel"}], "type": "dm"},
    },
    "alex": {
      "liz": {"data": [{"content":"test1", "author": "liz"}, {"content":"test2", "author": "alex"}], "type": "dm"},
      "daniel": {"data": [{"content":"test3", "author": "daniel"}, {"content":"test4", "author": "alex"}], "type": "dm"},
      "baru": {"data": [{"content":"test5", "author": "baru"}, {"content":"test6", "author": "alex"}], "type": "dm"},
    }
  })

  let [currChatName, setCurrChatName] = useState('liz');

  let [user, setUser] = useState('baru');

  return (
      <div className='App'>
          <div className='courseSelector--container'>
            <CourseSelector currChatName={currChatName} activeCourse={activeCourse} setActiveCourse={setActiveCourse} courseInfo={courseInfo} chats={Object.keys(chatData[user])} setCurrChatName={setCurrChatName} user={user} setUser={setUser}/>
          </div>
          <div className='pageOutletWrapper'>
            <Outlet context={[user, setChatData]}/>
          </div>
          <div className='chatColumn'>
            <ChatWindow currChatData={chatData[user][currChatName]} currChatName={currChatName} setChatData={setChatData} user={user}/>
          </div>
      </div>
  );
} 

export default App;

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
      "liz": {"data": [{"content":"baruuuuuuu", "author": "liz"}, {"content":"never text me", "author": "baru"}, {"content":"hehehe", "author": "liz"}]},
      "daniel": {"data": [{"content":"hey man whats up", "author": "baru"}, {"content":"nothin much barubasaur", "author": "daniel"}, {"content":"never call me that again", "author": "baru"}, {"content":"no", "author": "daniel"}]},
      "alex": {"data": [{"content":"BARU WAKE UP!!", "author": "alex"}, {"content":"LEAVE ME ALONEEEEE", "author": "baru"}]},
    },
    "liz": {
      "baru": {"data": [{"content":"baruuuuuuu", "author": "liz"}, {"content":"never text me", "author": "baru"}, {"content":"hehehe", "author": "liz"}]},
      "daniel": {"data": [{"content":"omw to the library now", "author": "liz"}, {"content":"Are you at Langsam?", "author": "daniel"}, {"content":"Yeah just got there", "author": "liz"}]},
      "alex": {"data": [{"content":"hey lizzo", "author": "alex"}, {"content":"whats goin on chungus", "author": "liz"}, {"content":"are you slaying per usual", "author": "liz"}, {"content":"you know it", "author": "alex"}]},
    },
    "daniel": {
      "liz": {"data": [{"content":"omw to the library now", "author": "liz"}, {"content":"Are you at Langsam?", "author": "daniel"}, {"content":"Yeah just got there", "author": "liz"}]},
      "baru": {"data": [{"content":"hey man whats up", "author": "baru"}, {"content":"nothin much barubasaur", "author": "daniel"}, {"content":"never call me that again", "author": "baru"}, {"content":"no", "author": "daniel"}]},
      "alex": {"data": [{"content":"hey alex how's it goin?", "author": "daniel"}, {"content":"terrible", "author": "alex"}, {"content":"same fr", "author": "daniel"}, {"content":"i feel like a ghost", "author": "alex"}, {"content":"honestly, same", "author": "daniel"}]},
    },
    "alex": {
      "liz": {"data": [{"content":"hey lizzo", "author": "alex"}, {"content":"whats goin on chungus", "author": "liz"}, {"content":"are you slaying per usual", "author": "liz"}, {"content":"you know it", "author": "alex"}]},
      "daniel": {"data": [{"content":"hey alex how's it goin?", "author": "daniel"}, {"content":"terrible", "author": "alex"}, {"content":"same fr", "author": "daniel"}, {"content":"i feel like a ghost", "author": "alex"}, {"content":"honestly, same", "author": "daniel"}]},
      "baru": {"data": [{"content":"BARU WAKE UP!!", "author": "alex"}, {"content":"LEAVE ME ALONEEEEE", "author": "baru"}]},
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

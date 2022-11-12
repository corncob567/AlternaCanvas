import './App.scss';
import { Outlet } from 'react-router-dom';
import React, { useState } from 'react';
import CourseNav from './components/navigation/CourseNav';
import CourseSelector from './components/navigation/CourseSelector';
import ChatWindow from './components/chat/ChatWindow'

const App = () => {
  const [chatData, setChatData] = useState({
    "liz": {"data": [{"content":"test1", "author": "false"}, {"content":"test2", "author": "true"}]},
    "daniel": {"data": [{"content":"test3", "author": "false"}, {"content":"test4", "author": "true"}]},
    "alex": {"data": [{"content":"test5", "author": "false"}, {"content":"test6", "author": "true"}]},
  })

  let [currChatName, setCurrChatName] = useState('liz');

    return (
        <div className='App'>
            <div className='courseSelector--container'>
              <CourseSelector/>
            </div>
            <div className='courseNav--container'>
              <CourseNav chats={Object.keys(chatData)} setCurrChatName={setCurrChatName}/>
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

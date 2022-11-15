import "./styles/main.scss";
import { Outlet } from "react-router-dom";
import React, { useRef, useState } from "react";
import CourseSelector from "./components/navigation/CourseSelector";
import ChatWindow from "./components/chat/ChatWindow";

function App() {
  const [activeCourse, setActiveCourse] = useState("ui");
  const [courseInfo, setCourseInfo] = useState({
    compg: {
      courseName: "Computer Graphics",
      courseProfessor: "Dr. Bingus",
      courseImg: "compgraphics.png",
      assignments: [{
        id: 1,
        name: "Assignment 1",
        dueDate: "November 14",
        dueTime: "11:59PM",
        submitted: false
      },{
        id: 2,
        name: "Assignment 2",
        dueDate: "November 21",
        dueTime: "11:59PM",
        submitted: false
      },{
        id: 3,
        name: "Assignment 3",
        dueDate: "November 29",
        dueTime: "11:59PM",
        submitted: false
      }
    ]},
    ui: {
      courseName: "User Interface Design",
      courseProfessor: "Dr. Aurisano",
      courseImg: "uiux.png",
      assignments: [{
        id: 1,
        name: "React Tutorial",
        dueDate: "November 1",
        dueTime: "1:30PM",
        submitted: true
      },{
        id: 2,
        name: "React Webpage 1",
        dueDate: "November 12",
        dueTime: "2:30PM",
        submitted: true
      },{
        id: 3,
        name: "React Webpage 2",
        dueDate: "November 17",
        dueTime: "2:30PM",
        submitted: false
      },{
        id: 4,
        name: "React Final Project",
        dueDate: "November 28",
        dueTime: "11:59PM",
        submitted: false
      }
    ]},
    seniordesign: {
      courseName: "Senior Design",
      courseProfessor: "Dr. Professor",
      courseImg: "coding.png",
      assignments: [{
        id: 1,
        name: "Proposal and Groups",
        dueDate: "September 3",
        dueTime: "11:59PM",
        submitted: true
      },{
        id: 2,
        name: "Concept Designs",
        dueDate: "October 3",
        dueTime: "11:59PM",
        submitted: true
      },{
        id: 3,
        name: "Prototype A",
        dueDate: "October 24",
        dueTime: "11:59PM",
        submitted: true
      },{
        name: "Advisor Review",
        dueDate: "October 31",
        dueTime: "11:59PM",
        submitted: true
      },{
        name: "User Interviews",
        dueDate: "November 13",
        dueTime: "11:59PM",
        submitted: true
      },{
        name: "Prototype B",
        dueDate: "December 2",
        dueTime: "11:59PM",
        submitted: false
      }
    ]},
  });

  const [chatData, setChatData] = useState({
    "baru": {
      "liz": {"data": [{"content":"baruuuuuuu", "author": "liz", 'time': Date.now()}, {"content":"never text me", "author": "baru", 'time': Date.now()}, {"content":"hehehe", "author": "liz", 'time': Date.now()}]},
      "daniel": {"data": [{"content":"hey man whats up", "author": "baru", 'time': Date.now()}, {"content":"nothin much barubasaur", "author": "daniel", 'time': Date.now()}, {"content":"never call me that again", "author": "baru", 'time': Date.now()}, {"content":"no", "author": "daniel", 'time': Date.now()}]},
      "alex": {"data": [{"content":"BARU WAKE UP!!", "author": "alex", 'time': Date.now()}, {"content":"LEAVE ME ALONEEEEE", "author": "baru", 'time': Date.now()}]},
    },
    "liz": {
      "baru": {"data": [{"content":"baruuuuuuu", "author": "liz", 'time': Date.now()}, {"content":"never text me", "author": "baru", 'time': Date.now()}, {"content":"hehehe", "author": "liz", 'time': Date.now()}]},
      "daniel": {"data": [{"content":"omw to the library now", "author": "liz", 'time': Date.now()}, {"content":"Are you at Langsam?", "author": "daniel", 'time': Date.now()}, {"content":"Yeah just got there", "author": "liz", 'time': Date.now()}]},
      "alex": {"data": [{"content":"hey lizzo", "author": "alex", 'time': Date.now()}, {"content":"whats goin on chungus", "author": "liz", 'time': Date.now()}, {"content":"are you slaying per usual", "author": "liz", 'time': Date.now()}, {"content":"you know it", "author": "alex", 'time': Date.now()}]},
    },
    "daniel": {
      "liz": {"data": [{"content":"omw to the library now", "author": "liz", 'time': Date.now()}, {"content":"Are you at Langsam?", "author": "daniel", 'time': Date.now()}, {"content":"Yeah just got there", "author": "liz", 'time': Date.now()}]},
      "baru": {"data": [{"content":"hey man whats up", "author": "baru", 'time': Date.now()}, {"content":"nothin much barubasaur", "author": "daniel", 'time': Date.now()}, {"content":"never call me that again", "author": "baru", 'time': Date.now()}, {"content":"no", "author": "daniel", 'time': Date.now()}]},
      "alex": {"data": [{"content":"hey alex how's it goin?", "author": "daniel", 'time': Date.now()}, {"content":"terrible", "author": "alex", 'time': Date.now()}, {"content":"same fr", "author": "daniel", 'time': Date.now()}, {"content":"i feel like a ghost", "author": "alex", 'time': Date.now()}, {"content":"honestly, same", "author": "daniel", 'time': Date.now()}]},
    },
    "alex": {
      "liz": {"data": [{"content":"hey lizzo", "author": "alex", 'time': Date.now()}, {"content":"whats goin on chungus", "author": "liz", 'time': Date.now()}, {"content":"are you slaying per usual", "author": "liz", 'time': Date.now()}, {"content":"you know it", "author": "alex", 'time': Date.now()}]},
      "daniel": {"data": [{"content":"hey alex how's it goin?", "author": "daniel", 'time': Date.now()}, {"content":"terrible", "author": "alex", 'time': Date.now()}, {"content":"same fr", "author": "daniel", 'time': Date.now()}, {"content":"i feel like a ghost", "author": "alex", 'time': Date.now()}, {"content":"honestly, same", "author": "daniel", 'time': Date.now()}]},
      "baru": {"data": [{"content":"BARU WAKE UP!!", "author": "alex", 'time': Date.now()}, {"content":"LEAVE ME ALONEEEEE", "author": "baru", 'time': Date.now()}]},
    }
  })

  let [currChatName, setCurrChatName] = useState("liz");    
  const [renderSD, setSD] = useState(false);

  let [user, setUser] = useState("baru");

  return (
    <div className="App">
      <div className="courseSelector--container">
        <CourseSelector
          currChatName={currChatName}
          activeCourse={activeCourse}
          setActiveCourse={setActiveCourse}
          courseInfo={courseInfo}
          chats={Object.keys(chatData[user])}
          setCurrChatName={setCurrChatName}
          user={user}
          setUser={setUser}
          renderSD={renderSD}
          setSD={setSD}
        />
      </div>
      <div className="pageOutletWrapper">
        <Outlet context={[user, courseInfo, setChatData]} />
      </div>
      <div className="chatColumn">
        <ChatWindow
          currChatData={chatData[user][currChatName]}
          currChatName={currChatName}
          setChatData={setChatData}
          user={user}
        />
      </div>
    </div>
  );
}

export default App;

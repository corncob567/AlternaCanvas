import "./styles/main.scss";
import { Outlet } from "react-router-dom";
import React, { useState } from "react";
import CourseSelector from "./components/navigation/CourseSelector";
import ChatWindow from "./components/chat/ChatWindow";

function App() {
  const [activeCourse, setActiveCourse] = useState("compg");
  const [courseInfo, setCourseInfo] = useState({
    compg: {
      courseName: "Computer Graphics",
      courseProfessor: "Dr. Bingus",
      courseImg: "compgraphics.png",
      assignments: [{
        name: "Assignment 1",
        dueDate: "November 14",
        dueTime: "11:59PM",
        submitted: false
      },{
        name: "Assignment 2",
        dueDate: "November 21",
        dueTime: "11:59PM",
        submitted: false
      },{
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
        name: "React Tutorial",
        dueDate: "November 1",
        dueTime: "1:30PM",
        submitted: true
      },{
        name: "React Webpage 1",
        dueDate: "November 12",
        dueTime: "2:30PM",
        submitted: true
      },{
        name: "React Webpage 2",
        dueDate: "November 17",
        dueTime: "2:30PM",
        submitted: false
      },{
        name: "React Final Project",
        dueDate: "November 28",
        dueTime: "11:59PM",
        submitted: false
      }
    ]},
    seniordesign: {
      courseName: "Senior Design",
      courseProfessor: "Dr. Professor",
      courseImg: "uiux.png",
      assignments: [{
        name: "Proposal and Groups",
        dueDate: "September 3",
        dueTime: "11:59PM",
        submitted: true
      },{
        name: "Concept Designs",
        dueDate: "October 3",
        dueTime: "11:59PM",
        submitted: true
      },{
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
    baru: {
      liz: {
        data: [
          { content: "test1", author: "liz" },
          { content: "test2", author: "baru" }
        ]
      },
      daniel: {
        data: [
          { content: "test3", author: "daniel" },
          { content: "test4", author: "baru" }
        ]
      },
      alex: {
        data: [
          { content: "test5", author: "alex" },
          { content: "test6", author: "baru" }
        ]
      }
    },
    liz: {
      baru: {
        data: [
          { content: "test1", author: "baru" },
          { content: "test2", author: "liz" }
        ]
      },
      daniel: {
        data: [
          { content: "test3", author: "daniel" },
          { content: "test4", author: "liz" }
        ]
      },
      alex: {
        data: [
          { content: "test5", author: "alex" },
          { content: "test6", author: "liz" }
        ]
      }
    },
    daniel: {
      liz: {
        data: [
          { content: "test1", author: "liz" },
          { content: "test2", author: "daniel" }
        ]
      },
      baru: {
        data: [
          { content: "test3", author: "baru" },
          { content: "test4", author: "daniel" }
        ]
      },
      alex: {
        data: [
          { content: "test5", author: "alex" },
          { content: "test6", author: "daniel" }
        ]
      }
    },
    alex: {
      liz: {
        data: [
          { content: "test1", author: "liz" },
          { content: "test2", author: "alex" }
        ]
      },
      daniel: {
        data: [
          { content: "test3", author: "daniel" },
          { content: "test4", author: "alex" }
        ]
      },
      baru: {
        data: [
          { content: "test5", author: "baru" },
          { content: "test6", author: "alex" }
        ]
      }
    }
  });

  let [currChatName, setCurrChatName] = useState("liz");

  let [user, setUser] = useState("baru");

  return (
    <div className="App">
      <div className="courseSelector--container">
        <CourseSelector
          currChatName={currChatName}
          activeCourse={activeCourse}
          setActiveCourse={setActiveCourse}
          courseInfo={courseInfo}
          chats={Object.keys(chatData)}
          setCurrChatName={setCurrChatName}
          user={user}
          setUser={setUser}
        />
      </div>
      <div className="pageOutletWrapper">
        <Outlet context={[user]} />
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

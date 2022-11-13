import React, { useEffect } from 'react';
import '../../styles/main.scss';
import { NavLink } from 'react-router-dom';
import { propTypes } from 'react-bootstrap/esm/Image';
import ChatSelect from './ChatSelect';

function CourseNav({courseID, courseName, courseImg, courseProfessor, chats, setCurrChatName}) {
    function updateCurrChatName(chatName){
        setCurrChatName(currChatName => currChatName = chatName)
    }
    function test(){
        console.log('test')
    }
    return (
        <div className='courseNav'>
            <div className='courseNav--course-info'>
                <img src={courseImg} alt={courseName} className="courseNav--img"/>
                <h3 className='courseNav--courseTitle'>{courseName}</h3>
                <p className='courseNav---courseProfessor'>{courseProfessor}</p>
                <hr className="courseNav--line"></hr>
            </div> 
            <div className='courseNav--tabs'>
                <ul className='courseNav--pages'>
                    <li> 
                        <NavLink to='syllabus' className={e => (e.isActive ? 'courseNav--item active' : 'courseNav--item')}>Syllabus</NavLink>
                    </li>
                    <li>
                        <NavLink to='assignments' className={e => (e.isActive ? 'courseNav--item active' : 'courseNav--item')}>Assignments</NavLink>
                    </li>
                    <li>
                        <NavLink to='modules' className={e => (e.isActive ? 'courseNav--item active' : 'courseNav--item')}>Modules</NavLink>
                    </li>
                    <li>
                        <NavLink to='announcements' className={e => (e.isActive ? 'courseNav--item active' : 'courseNav--item')}>Announcements</NavLink>
                    </li>
                    <li>
                        <NavLink to='grades' className={e => (e.isActive ? 'courseNav--item active' : 'courseNav--item')}>Grades</NavLink>
                    </li>
                    {/* <br></br> */}
                    <hr className="courseNav--line"></hr>
                </ul>
                <ul className='courseNav--chats'>
                    {chats.map((chat) => {
                        return <ChatSelect chatName={chat} onClick={() => updateCurrChatName(chat)}></ChatSelect>
                    })}
                </ul>
            </div>
        </div>
    );
}

export default CourseNav;
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
                <img src={courseImg} alt={courseName}/>
                <h3>{courseName}</h3>
                <p>{courseProfessor}</p>
            </div> 
            <ul className='courseNav--pages'>
                <li> 
                    <NavLink to={`${courseID}/syllabus`} className={e => (e.isActive ? 'courseNav--item active' : 'courseNav--item')}>Syllabus</NavLink>
                </li>
                <li>
                    <NavLink to='/assignments' className={e => (e.isActive ? 'courseNav--item active' : 'courseNav--item')}>Assignments</NavLink>
                </li>
                <li>
                    <NavLink to='/modules' className={e => (e.isActive ? 'courseNav--item active' : 'courseNav--item')}>Modules</NavLink>
                </li>
                <li>
                    <NavLink to='/announcements' className={e => (e.isActive ? 'courseNav--item active' : 'courseNav--item')}>Announcements</NavLink>
                </li>
                <li>
                    <NavLink to='/grades' className={e => (e.isActive ? 'courseNav--item active' : 'courseNav--item')}>Grades</NavLink>
                </li>
                <br></br>
                {chats.map((chat) => {
                    return <ChatSelect chatName={chat} click={() => updateCurrChatName(chat)}></ChatSelect>
                })}
            </ul>
        </div>
    );
}

export default CourseNav;
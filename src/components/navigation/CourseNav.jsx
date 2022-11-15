import React from 'react';
import '../../styles/main.scss';
import { NavLink } from 'react-router-dom';
import ChatSelector from './ChatSelector';
import uiux from '../../assets/uiux.png';
import compgraphics from '../../assets/compgraphics.png';
import coding from '../../assets/coding.png';

function CourseNav({courseID, courseName, courseImg, courseProfessor, currChatName, chats, setCurrChatName, user}) {
    let dynamicCourseImg;
    switch(courseImg){
        case '../../assets/uiux.png':
            dynamicCourseImg = <img src={uiux} alt={courseName} className="courseNav--img"/>;
        break;
        case '../../assets/compgraphics.png':
            dynamicCourseImg = <img src={compgraphics} alt={courseName} className="courseNav--img"/>;
        break;
        case '../../assets/coding.png':
            dynamicCourseImg = <img src={coding} alt={courseName} className="courseNav--img"/>;
        break;
        default:
            dynamicCourseImg = <img src={''} alt={courseName} className="courseNav--img"/>;
    }

    return (
        <div className='courseNav'>
            <div className='courseNav--course-info'>
                {dynamicCourseImg}
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
                    <li>
                        <NavLink to='zoom' className={e => (e.isActive ? 'courseNav--item active' : 'courseNav--item')}>Zoom</NavLink>
                    </li>
                    <hr className="courseNav--line"></hr>
                </ul>
                <ChatSelector chats={chats} setCurrChatName={setCurrChatName} currChatName={currChatName} user={user}/>
            </div>
        </div>
    );
}

export default CourseNav;
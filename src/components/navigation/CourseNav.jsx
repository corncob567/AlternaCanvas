import React from 'react';
import '../../styles/main.scss';
import { NavLink } from 'react-router-dom';

function CourseNav({ courseID, courseName, courseImg, courseProfessor }) {
    return (
        <div className='courseNav'>
            <div className='courseNav--course-info'>
                <img src={courseImg} alt={courseName} className="courseNav--img"/>
                <h3 className='courseNav--courseTitle'>{courseName}</h3>
                <p>{courseProfessor}</p>
            </div> 
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
            </ul>
        </div>
    );
}

export default CourseNav;
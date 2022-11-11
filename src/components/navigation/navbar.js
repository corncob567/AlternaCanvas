import React from 'react';
import './navigation.css';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='navigation'>
            <div className='navigation--col'>
                <ul className='navigation--items'>
                    <li> 
                        <NavLink to='/syllabus' className={e => (e.isActive ? 'navigation--item active' : 'navigation--item')}>Syllabus</NavLink>
                    </li>
                    <li>
                        <NavLink to='/assignments' className={e => (e.isActive ? 'navigation--item active' : 'navigation--item')}>Assignments</NavLink>
                    </li>
                    <li>
                        <NavLink to='/modules' className={e => (e.isActive ? 'navigation--item active' : 'navigation--item')}>Modules</NavLink>
                    </li>
                    <li>
                        <NavLink to='/announcements' className={e => (e.isActive ? 'navigation--item active' : 'navigation--item')}>Announcements</NavLink>
                    </li>
                    <li>
                        <NavLink to='/grades' className={e => (e.isActive ? 'navigation--item active' : 'navigation--item')}>Grades</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default NavBar;
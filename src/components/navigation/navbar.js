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
                </ul>
            </div>
        </div>
    );
}

export default NavBar;
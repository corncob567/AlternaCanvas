import React from 'react';
import './navigation.css';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className='navigation'>
            <div className='navigation--col'>
                <ul className='navigation--items no-bullets'>
                    <li> 
                        <NavLink to='/syllabus' className={e => (e.isActive ? 'navigation--item active' : 'navigation--item')}>Syllabus</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navigation;
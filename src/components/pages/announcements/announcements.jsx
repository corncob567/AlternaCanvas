import React from 'react';
import AnnouncementList from './announcementlist.jsx';
import '../../../styles/main.scss';
import { FaBullhorn } from 'react-icons/fa';

const Announcements = (props) => {
    const courseId = props.courseId
    return (
        <div className='pageWrapper'>
            <h1 className='pageTitle'>Announcements <FaBullhorn/></h1>
            <AnnouncementList courseId={courseId}/>
        </div>
    );
};

export default Announcements;
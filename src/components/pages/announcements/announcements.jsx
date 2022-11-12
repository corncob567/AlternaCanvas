import React from 'react';
import AnnouncementList from './announcementlist.jsx';
import '../../../styles/main.scss';

const Announcements = (props) => {
    const courseId = props.courseId
    return (
        <div className='pageWrapper'>
            <h1 className='pageTitle'>Announcements</h1>
            <AnnouncementList courseId={courseId}/>
        </div>
    );
};

export default Announcements;
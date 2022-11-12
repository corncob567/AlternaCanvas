import React from 'react';
import '../../../styles/main.scss';

const SingleAnnouncement = (props) => {
    const {date, subject, body, author, courseId} = props.announcementInfo;
    const dateObj = new Date(date);
    const recentCutoff = new Date('11/01/2022');
    const isAfter = dateObj > recentCutoff;
    return (
        <div className={`singleAnnouncementWrapper${isAfter ? ' recent' : ''}`}>
            <h3 className='announcementName'>{subject}</h3>
            <p>{body}</p>
            <label>{author} | {date}</label>
        </div>
    );
};

export default SingleAnnouncement;
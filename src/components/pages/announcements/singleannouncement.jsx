import React from 'react';
import '../../../styles/main.scss';

const SingleAnnouncement = (props) => {
    const {date, subject, body, author, courseId} = props.announcementInfo;
    return (
        <div className='singleAnnouncementWrapper'>
            <h3 className='announcementName'>{subject}</h3>
            <p>{body}</p>
            <label>{author} | {date}</label>
        </div>
    );
};

export default SingleAnnouncement;
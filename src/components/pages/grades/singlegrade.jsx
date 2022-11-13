import React from 'react';
import '../../../styles/main.scss';

const SingleGrade = (props) => {
    const {date, title, totalPoints, earnedPoints, courseId} = props.gradeInfo;
    const dateObj = new Date(date);
    const recentCutoff = new Date('11/01/2022');
    const isAfter = dateObj > recentCutoff;

    function calculateGrade(totalPoints, earnedPoints, courseId){
        
    }
    
    return (
        <div className={`singleAnnouncementWrapper${isAfter ? ' recent' : ''}`}>
            <h3 className='announcementName'>{title}</h3>
            <p>{date}</p>
            <label>{earnedPoints} / {totalPoints}</label>
        </div>
    );
};

export default SingleGrade;
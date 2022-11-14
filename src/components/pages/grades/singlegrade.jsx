import React from 'react';
import '../../../styles/main.scss';

const SingleGrade = (props) => {
    const {date, title, totalPoints, earnedPoints, courseId} = props.gradeInfo;
    const dateObj = new Date(date);
    const recentCutoff = new Date('11/01/2022');
    const isAfter = dateObj > recentCutoff;

    const percentage = earnedPoints/totalPoints;
    let calcGrade = function(){
        if (percentage > .89){
            return "A";
        }
        else if (percentage > .79){
            return "B";
        }
        else if (percentage > .69){
            return "C";
        }else if (percentage > .59){
            return "D";
        }
        else{
            return "F";
        }
    }

    const letterGrade = calcGrade();
    
    return (
        <div className={`singleGradeWrapper`}>
            <h3 className='announcementName'>{title}</h3>
            <p>{date}</p>
            <label>{letterGrade}</label>
            <label>{earnedPoints} / {totalPoints}</label>
        </div>
    );
};

export default SingleGrade;
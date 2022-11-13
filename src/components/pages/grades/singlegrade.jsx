import React from 'react';
import '../../../styles/main.scss';

const SingleGrade = (props) => {
    const {date, title, totalPoints, earnedPoints, courseId} = props.gradeInfo;
    const dateObj = new Date(date);
    const recentCutoff = new Date('11/01/2022');
    const isAfter = dateObj > recentCutoff;

    const percentage = earnedPoints/totalPoints;
    let calcGrade = function(){
        if(courseId == "ui"){
            if (percentage > .92){
                return "A";
            }
            else if (percentage > .82){
                return "B";
            }
            else if (percentage > .72){
                return "C";
            }else if (percentage > .62){
                return "D";
            }
            else{
                return "F";
            }
        }
        else{
            if (percentage > .9){
                return "A";
            }
            else if (percentage > .8){
                return "B";
            }
            else if (percentage > .7){
                return "C";
            }else if (percentage > .6){
                return "D";
            }
            else{
                return "F";
            }
        }
    }

    const letterGrade = calcGrade();
    
    return (
        <div className={`singleAnnouncementWrapper${isAfter ? ' recent' : ''}`}>
            <h3 className='announcementName'>{title}</h3>
            <p>{date}</p>
            <label>{letterGrade}</label>
            <label>{earnedPoints} / {totalPoints}</label>
        </div>
    );
};

export default SingleGrade;
import React from 'react';
import SingleGrade from './singlegrade.jsx';
import '../../../styles/main.scss';

const grades = [
    {
        date: "11/10/22",
        title: "Project 1",
        earnedPoints: 11,
        totalPoints: 20,
        courseId: "ui"
    },
    {
        date: "11/10/22",
        title: "Project 1",
        earnedPoints: 11,
        totalPoints: 20,
        courseId: "ui"
    },
    {
        date: "11/10/22",
        title: "Project 1",
        earnedPoints: 11,
        totalPoints: 20,
        courseId: "ui"
    },
    {
        date: "11/10/22",
        title: "Project 1",
        earnedPoints: 11,
        totalPoints: 20,
        courseId: "ui"
    },
    {
        date: "11/10/22",
        title: "Project 1",
        earnedPoints: 11,
        totalPoints: 20,
        courseId: "compg"
    },
    {
        date: "11/10/22",
        title: "Project 1",
        earnedPoints: 11,
        totalPoints: 20,
        courseId: "compg"
    },
    {
        date: "11/10/22",
        title: "Project 1",
        earnedPoints: 11,
        totalPoints: 20,
        courseId: "compg"
    },
    {
        date: "11/10/22",
        title: "Project 1",
        earnedPoints: 11,
        totalPoints: 20,
        courseId: "seniordesign"
    },
    {
        date: "11/10/22",
        title: "Project 1",
        earnedPoints: 11,
        totalPoints: 20,
        courseId: "seniordesign"
    },
];


const GradeList = (props) => {
    const courseId = props.courseId
    var courseGrades = grades.filter(function(ann){
        return ann.courseId === courseId;
    });

    return(
        <div className='announcementListWrapper'>
            {courseGrades.map((ann, index) => {
                return (
                    <SingleGrade key={index} gradeInfo={ann}/>
                );
            })}
        </div>
    );
};

export default GradeList;
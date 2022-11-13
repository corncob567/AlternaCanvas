import React from 'react';
import SingleGrade from './singlegrade.jsx';
import '../../../styles/main.scss';

const grades = [
    {
        date: "11/10/22",
        title: "Project 2",
        earnedPoints: 48,
        totalPoints: 50,
        courseId: "ui"
    },
    {
        date: "11/09/22",
        title: "Homework 5",
        earnedPoints: 15,
        totalPoints: 20,
        courseId: "ui"
    },
    {
        date: "10/30/22",
        title: "Homework 4",
        earnedPoints: 18,
        totalPoints: 20,
        courseId: "ui"
    },
    {
        date: "10/15/22",
        title: "Project 1",
        earnedPoints: 45,
        totalPoints: 50,
        courseId: "ui"
    },
    {
        date: "11/10/22",
        title: "Project 3",
        earnedPoints: 14,
        totalPoints: 20,
        courseId: "compg"
    },
    {
        date: "11/10/22",
        title: "Project 2",
        earnedPoints: 12,
        totalPoints: 20,
        courseId: "compg"
    },
    {
        date: "11/10/22",
        title: "Project 1",
        earnedPoints: 16,
        totalPoints: 20,
        courseId: "compg"
    },
    {
        date: "11/10/22",
        title: "Check-point 3",
        earnedPoints: 14,
        totalPoints: 20,
        courseId: "seniordesign"
    },
    {
        date: "11/10/22",
        title: "Presentation",
        earnedPoints: 17,
        totalPoints: 20,
        courseId: "seniordesign"
    },
];


const GradeList = (props) => {
    const courseId = props.courseId
    var courseGrades = grades.filter(function(grade){
        return grade.courseId === courseId;
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
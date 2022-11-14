import React from 'react';
import SingleGrade from './singlegrade.jsx';
import '../../../styles/main.scss';

const grades = [
    {
        date: "11/10/22",
        title: "Project 2",
        earnedPoints: 48,
        totalPoints: 50,
        courseId: "ui",
        type: "project"
    },
    {
        date: "11/11/22",
        title: "Exam",
        earnedPoints: 50,
        totalPoints: 50,
        courseId: "ui",
        type: "final"
    },
    {
        date: "11/10/22",
        title: "Group Work",
        earnedPoints: 8,
        totalPoints: 8,
        courseId: "ui",
        type: "participation"
    },
    {
        date: "11/09/22",
        title: "Homework 5",
        earnedPoints: 15,
        totalPoints: 20,
        courseId: "ui",
        type: "assignment"
    },
    {
        date: "10/30/22",
        title: "Homework 4",
        earnedPoints: 18,
        totalPoints: 20,
        courseId: "ui",
        type: "assignment"
    },
    {
        date: "10/15/22",
        title: "Project 1",
        earnedPoints: 45,
        totalPoints: 50,
        courseId: "ui",
        type: "project"
    },
    {
        date: "10/10/22",
        title: "Homework 1",
        earnedPoints: 19,
        totalPoints: 20,
        courseId: "compg",
        type: "assignment"
    },
    {
        date: "11/10/22",
        title: "Final Exam",
        earnedPoints: 180,
        totalPoints: 200,
        courseId: "compg",
        type: "final"
    },
    {
        date: "11/10/22",
        title: "Project 3",
        earnedPoints: 14,
        totalPoints: 20,
        courseId: "compg",
        type: "project"
    },
    {
        date: "11/10/22",
        title: "Project 2",
        earnedPoints: 12,
        totalPoints: 20,
        courseId: "compg",
        type: "project"
    },
    {
        date: "11/10/22",
        title: "Project 1",
        earnedPoints: 16,
        totalPoints: 20,
        courseId: "compg",
        type: "project"
    },
    {
        date: "11/10/22",
        title: "Check-point 3",
        earnedPoints: 14,
        totalPoints: 20,
        courseId: "seniordesign",
        type: "assignment"
    },
    {
        date: "11/6/22",
        title: "Progress Essay",
        earnedPoints: 95,
        totalPoints: 100,
        courseId: "seniordesign",
        type: "project"
    },
    {
        date: "11/10/22",
        title: "Presentation",
        earnedPoints: 18,
        totalPoints: 20,
        courseId: "seniordesign",
        type: "final"
    },
];


const GradeList = (props) => {
    const courseId = props.courseId
    var courseGrades = grades.filter(function(grade){
        return grade.courseId === courseId;
    });


    let assignmentEarned = 0;
    let assignmentTotal = 0;
    let participationEarned = 0;
    let participationTotal = 0;
    let projectEarned = 0;
    let projectTotal = 0;
    let finalExamEarned = 0;
    let finalExamTotal = 0;

    let classTotal = function(grade){
        if (grade.type == "assignment"){
            assignmentEarned += grade.earnedPoints;
            assignmentTotal += grade.totalPoints;
        }
        else if (grade.type == "participation"){
            participationEarned += grade.earnedPoints;
            participationTotal += grade.totalPoints;
        }
        else if (grade.type == "project"){
            projectEarned += grade.earnedPoints;
            projectTotal += grade.totalPoints;
        }
        else if (grade.type == "final"){
            finalExamEarned += grade.earnedPoints;
            finalExamTotal += grade.totalPoints;
        }
    }

    courseGrades.forEach((element) => {
        classTotal(element);
    } );

    // default weighting:
    let assignment = 0.1
    let participation = 0.05
    let project = 0.75
    let final = 0.1

    if (courseId == "seniordesign"){
        assignment = 0.1
        participation = 0
        project = 0.8
        final = 0.1
    }
    else if (courseId == "compg"){
        assignment = 0.3
        participation = 0.1
        project = 0.5
        final = 0.1
    }

    let assignmentPercent = assignmentEarned == 0 ? 0 : ((assignmentEarned/assignmentTotal) * 100);
    let participationPercent = participationEarned == 0 ? 0 : ((participationEarned/participationTotal) * 100);
    let projectPercent = projectEarned == 0 ? 0 : ((projectEarned/projectTotal) * 100);
    let finalExamPercent = finalExamEarned == 0 ? 0 : ((finalExamEarned/finalExamTotal) * 100);

    let totalGrade = parseInt((assignmentPercent * assignment) + (participationPercent * participation) + (projectPercent * project) + (finalExamPercent * final));

    return(
        <div className='announcementListWrapper'>
            <div>
                {totalGrade}
            </div>
            {courseGrades.map((ann, index) => {
                return (
                    <SingleGrade key={index} gradeInfo={ann}/>
                );
            })}
        </div>
    );
};

export default GradeList;
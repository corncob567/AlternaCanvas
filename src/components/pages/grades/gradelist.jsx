import React from 'react';
import SingleGrade from './singlegrade.jsx';
import '../../../styles/main.scss';
import { getDisplayName } from '../../navigation/ChatSelect';

const grades = [
    {
        date: "11/10/22",
        title: "Project 2",
        earnedPoints: 45,
        totalPoints: 50,
        courseId: "ui",
        type: "project",
        user: "baru"
    },
    {
        date: "11/11/22",
        title: "Exam",
        earnedPoints: 40,
        totalPoints: 50,
        courseId: "ui",
        type: "final",
        user: "baru"
    },
    {
        date: "11/10/22",
        title: "Group Work",
        earnedPoints: 2,
        totalPoints: 8,
        courseId: "ui",
        type: "participation",
        user: "baru"
    },
    {
        date: "11/09/22",
        title: "Homework 5",
        earnedPoints: 5,
        totalPoints: 20,
        courseId: "ui",
        type: "assignment",
        user: "baru"
    },
    {
        date: "10/30/22",
        title: "Homework 4",
        earnedPoints: 10,
        totalPoints: 20,
        courseId: "ui",
        type: "assignment",
        user: "baru"
    },
    {
        date: "10/15/22",
        title: "Project 1",
        earnedPoints: 4,
        totalPoints: 50,
        courseId: "ui",
        type: "project",
        user: "baru"
    },
    {
        date: "10/10/22",
        title: "Homework 1",
        earnedPoints: 6,
        totalPoints: 20,
        courseId: "compg",
        type: "assignment",
        user: "baru"
    },
    {
        date: "11/10/22",
        title: "Final Exam",
        earnedPoints: 50,
        totalPoints: 200,
        courseId: "compg",
        type: "final",
        user: "baru"
    },
    {
        date: "11/10/22",
        title: "Project 3",
        earnedPoints: 8,
        totalPoints: 20,
        courseId: "compg",
        type: "project",
        user: "baru"
    },
    {
        date: "11/10/22",
        title: "Project 2",
        earnedPoints: 2,
        totalPoints: 20,
        courseId: "compg",
        type: "project",
        user: "baru"
    },
    {
        date: "11/10/22",
        title: "Project 1",
        earnedPoints: 6,
        totalPoints: 20,
        courseId: "compg",
        type: "project",
        user: "baru"
    },
    {
        date: "11/10/22",
        title: "Check-point 3",
        earnedPoints: 4,
        totalPoints: 20,
        courseId: "seniordesign",
        type: "assignment",
        user: "baru"
    },
    {
        date: "11/6/22",
        title: "Progress Essay",
        earnedPoints: 90,
        totalPoints: 100,
        courseId: "seniordesign",
        type: "project",
        user: "baru"
    },
    {
        date: "11/10/22",
        title: "Presentation",
        earnedPoints: 14,
        totalPoints: 20,
        courseId: "seniordesign",
        type: "final",
        user: "baru"
    },
    {
        date: "11/10/22",
        title: "Project 2",
        earnedPoints: 49,
        totalPoints: 50,
        courseId: "ui",
        type: "project",
        user: "alex"
    },
    {
        date: "11/11/22",
        title: "Exam",
        earnedPoints: 50,
        totalPoints: 50,
        courseId: "ui",
        type: "final",
        user: "alex"
    },
    {
        date: "11/10/22",
        title: "Group Work",
        earnedPoints: 8,
        totalPoints: 8,
        courseId: "ui",
        type: "participation",
        user: "alex"
    },
    {
        date: "11/09/22",
        title: "Homework 5",
        earnedPoints: 17,
        totalPoints: 20,
        courseId: "ui",
        type: "assignment",
        user: "alex"
    },
    {
        date: "10/30/22",
        title: "Homework 4",
        earnedPoints: 19,
        totalPoints: 20,
        courseId: "ui",
        type: "assignment",
        user: "alex"
    },
    {
        date: "10/15/22",
        title: "Project 1",
        earnedPoints: 49,
        totalPoints: 50,
        courseId: "ui",
        type: "project",
        user: "alex"
    },
    {
        date: "10/10/22",
        title: "Homework 1",
        earnedPoints: 20,
        totalPoints: 20,
        courseId: "compg",
        type: "assignment",
        user: "alex"
    },
    {
        date: "11/10/22",
        title: "Final Exam",
        earnedPoints: 190,
        totalPoints: 200,
        courseId: "compg",
        type: "final",
        user: "alex"
    },
    {
        date: "11/10/22",
        title: "Project 3",
        earnedPoints: 20,
        totalPoints: 20,
        courseId: "compg",
        type: "project",
        user: "alex"
    },
    {
        date: "11/10/22",
        title: "Project 2",
        earnedPoints: 17,
        totalPoints: 20,
        courseId: "compg",
        type: "project",
        user: "alex"
    },
    {
        date: "11/10/22",
        title: "Project 1",
        earnedPoints: 17,
        totalPoints: 20,
        courseId: "compg",
        type: "project",
        user: "alex"
    },
    {
        date: "11/10/22",
        title: "Check-point 3",
        earnedPoints: 19,
        totalPoints: 20,
        courseId: "seniordesign",
        type: "assignment",
        user: "alex"
    },
    {
        date: "11/6/22",
        title: "Progress Essay",
        earnedPoints: 94,
        totalPoints: 100,
        courseId: "seniordesign",
        type: "project",
        user: "alex"
    },
    {
        date: "11/10/22",
        title: "Presentation",
        earnedPoints: 19,
        totalPoints: 20,
        courseId: "seniordesign",
        type: "final",
        user: "alex"
    },
    {
        date: "11/10/22",
        title: "Project 2",
        earnedPoints: 46,
        totalPoints: 50,
        courseId: "ui",
        type: "project",
        user: "liz"
    },
    {
        date: "11/11/22",
        title: "Exam",
        earnedPoints: 50,
        totalPoints: 50,
        courseId: "ui",
        type: "final",
        user: "liz"
    },
    {
        date: "11/10/22",
        title: "Group Work",
        earnedPoints: 8,
        totalPoints: 8,
        courseId: "ui",
        type: "participation",
        user: "liz"
    },
    {
        date: "11/09/22",
        title: "Homework 5",
        earnedPoints: 19,
        totalPoints: 20,
        courseId: "ui",
        type: "assignment",
        user: "liz"
    },
    {
        date: "10/30/22",
        title: "Homework 4",
        earnedPoints: 16,
        totalPoints: 20,
        courseId: "ui",
        type: "assignment",
        user: "liz"
    },
    {
        date: "10/15/22",
        title: "Project 1",
        earnedPoints: 47,
        totalPoints: 50,
        courseId: "ui",
        type: "project",
        user: "liz"
    },
    {
        date: "10/10/22",
        title: "Homework 1",
        earnedPoints: 20,
        totalPoints: 20,
        courseId: "compg",
        type: "assignment",
        user: "liz"
    },
    {
        date: "11/10/22",
        title: "Final Exam",
        earnedPoints: 198,
        totalPoints: 200,
        courseId: "compg",
        type: "final",
        user: "liz"
    },
    {
        date: "11/10/22",
        title: "Project 3",
        earnedPoints: 20,
        totalPoints: 20,
        courseId: "compg",
        type: "project",
        user: "liz"
    },
    {
        date: "11/10/22",
        title: "Project 2",
        earnedPoints: 19,
        totalPoints: 20,
        courseId: "compg",
        type: "project",
        user: "liz"
    },
    {
        date: "11/10/22",
        title: "Project 1",
        earnedPoints: 19,
        totalPoints: 20,
        courseId: "compg",
        type: "project",
        user: "liz"
    },
    {
        date: "11/10/22",
        title: "Check-point 3",
        earnedPoints: 20,
        totalPoints: 20,
        courseId: "seniordesign",
        type: "assignment",
        user: "liz"
    },
    {
        date: "11/10/22",
        title: "Check-point 3",
        earnedPoints: 19,
        totalPoints: 20,
        courseId: "seniordesign",
        type: "assignment",
        user: "liz"
    },
    {
        date: "11/6/22",
        title: "Progress Essay",
        earnedPoints: 99,
        totalPoints: 100,
        courseId: "seniordesign",
        type: "project",
        user: "liz"
    },
    {
        date: "11/10/22",
        title: "Presentation",
        earnedPoints: 18,
        totalPoints: 20,
        courseId: "seniordesign",
        type: "final",
        user: "liz"
    },
    {
        date: "11/10/22",
        title: "Project 2",
        earnedPoints: 48,
        totalPoints: 50,
        courseId: "ui",
        type: "project",
        user: "daniel"
    },
    {
        date: "11/11/22",
        title: "Exam",
        earnedPoints: 40,
        totalPoints: 50,
        courseId: "ui",
        type: "final",
        user: "daniel"
    },
    {
        date: "11/10/22",
        title: "Group Work",
        earnedPoints: 7,
        totalPoints: 8,
        courseId: "ui",
        type: "participation",
        user: "daniel"
    },
    {
        date: "11/09/22",
        title: "Homework 5",
        earnedPoints: 15,
        totalPoints: 20,
        courseId: "ui",
        type: "assignment",
        user: "daniel"
    },
    {
        date: "10/30/22",
        title: "Homework 4",
        earnedPoints: 18,
        totalPoints: 20,
        courseId: "ui",
        type: "assignment",
        user: "daniel"
    },
    {
        date: "10/15/22",
        title: "Project 1",
        earnedPoints: 45,
        totalPoints: 50,
        courseId: "ui",
        type: "project",
        user: "daniel"
    },
    {
        date: "10/10/22",
        title: "Homework 1",
        earnedPoints: 17,
        totalPoints: 20,
        courseId: "compg",
        type: "assignment",
        user: "daniel"
    },
    {
        date: "11/10/22",
        title: "Final Exam",
        earnedPoints: 190,
        totalPoints: 200,
        courseId: "compg",
        type: "final",
        user: "daniel"
    },
    {
        date: "11/10/22",
        title: "Project 3",
        earnedPoints: 18,
        totalPoints: 20,
        courseId: "compg",
        type: "project",
        user: "daniel"
    },
    {
        date: "11/10/22",
        title: "Project 2",
        earnedPoints: 20,
        totalPoints: 20,
        courseId: "compg",
        type: "project",
        user: "daniel"
    },
    {
        date: "11/10/22",
        title: "Project 1",
        earnedPoints: 18,
        totalPoints: 20,
        courseId: "compg",
        type: "project",
        user: "daniel"
    },
    {
        date: "11/10/22",
        title: "Check-point 3",
        earnedPoints: 19,
        totalPoints: 20,
        courseId: "seniordesign",
        type: "assignment",
        user: "liz"
    },
    {
        date: "11/6/22",
        title: "Progress Essay",
        earnedPoints: 93,
        totalPoints: 100,
        courseId: "seniordesign",
        type: "project",
        user: "liz"
    },
    {
        date: "11/10/22",
        title: "Presentation",
        earnedPoints: 19,
        totalPoints: 20,
        courseId: "seniordesign",
        type: "final",
        user: "liz"
    },

];


const GradeList = (props) => {
    const courseId = props.courseId
    const user = props.user;
    var courseGrades = grades.filter(function(grade){
        return (grade.courseId === courseId && grade.user === user);
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
        if (grade.type === "assignment"){
            assignmentEarned += grade.earnedPoints;
            assignmentTotal += grade.totalPoints;
        }
        else if (grade.type === "participation"){
            participationEarned += grade.earnedPoints;
            participationTotal += grade.totalPoints;
        }
        else if (grade.type === "project"){
            projectEarned += grade.earnedPoints;
            projectTotal += grade.totalPoints;
        }
        else if (grade.type === "final"){
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

    if (courseId === "seniordesign"){
        assignment = 0.1
        participation = 0
        project = 0.8
        final = 0.1
    }
    else if (courseId === "compg"){
        assignment = 0.3
        participation = 0.1
        project = 0.5
        final = 0.1
    }

    let assignmentPercent = assignmentEarned === 0 ? 0 : ((assignmentEarned/assignmentTotal) * 100);
    let participationPercent = participationEarned === 0 ? 0 : ((participationEarned/participationTotal) * 100);
    let projectPercent = projectEarned === 0 ? 0 : ((projectEarned/projectTotal) * 100);
    let finalExamPercent = finalExamEarned === 0 ? 0 : ((finalExamEarned/finalExamTotal) * 100);

    let totalGrade = parseInt((assignmentPercent * assignment) + (participationPercent * participation) + (projectPercent * project) + (finalExamPercent * final));

    // set display student name:
    let fullName = getDisplayName(user);

    return(
        <div>
            <div class="totalGradeContainer">
                <div class='classInfo'>
                    <div>Student: {fullName} </div> 
                    <div class='classGrade'>Total: {totalGrade}%</div>
                    <button class='gradeButton' type="button">Print Grades</button>
                </div>
                <div>
                    <div class='detailHeader'>Grade Details</div>
                    Grades are weighted by the following <br /> scale:
                    <table class='weighting'>
                        <tr class='weightRow-first'>
                            <td>Assigments:</td>
                            <td>{assignment * 100}%</td>
                        </tr>
                        <tr class='weightRow'>
                            <td>Participation:</td>
                            <td>{participation * 100}%</td>
                        </tr>
                        <tr class='weightRow'>
                            <td>Projects:</td>
                            <td>{project * 100}%</td>
                        </tr>
                        <tr class='weightRow'>
                            <td>Final Exam:</td>
                            <td>{final * 100}%</td>
                        </tr>
                    </table>
                </div>
            </div>
            <table class="gradeTable">
                <tr class='headerStyle'>
                    <th>Name</th>
                    <th>Due</th>
                    <th>Score</th>
                    <th>Percentage</th>
                    <th>Letter Grade</th>
                </tr>
                    {courseGrades.map((ann, index) => {
                        return (
                            <SingleGrade key={index} gradeInfo={ann}/>
                        );
                    })}
            </table>
        </div>
    );
};

export default GradeList;
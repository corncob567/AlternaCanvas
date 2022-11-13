import React from 'react';
import SingleAnnouncement from './singleannouncement.jsx';
import '../../../styles/main.scss';

const announcements = [
    {
        date: "11/10/22",
        subject: "Class cancelled today!",
        body: "I got sick and can't teach today. Enjoy the day off!",
        author: "Dr. Jerry Bingus",
        courseId: "compg"
    },
    {
        date: "11/02/22",
        subject: "Important lecture on Tuesday",
        body: "Don't be late! This information will be important for your project and final exam!",
        author: "Dr. Jerry Bingus",
        courseId: "compg"
    },
    {
        date: "8/29/22",
        subject: "Welcome to the class everyone!",
        body: "Make sure to get to know everyone - especially Baru! He's so handsome and perfect.",
        author: "Dr. Jerry Bingus",
        courseId: "compg"
    },
    {
        date: "11/11/22",
        subject: "Get your projects finished up!",
        body: "The deadline is approaching on Monday! Make sure your projects look presentable and that all of your documentation is published!",
        author: "Jillian Aurisano",
        courseId: "ui"
    },
    {
        date: "11/08/22",
        subject: "Class cancelled",
        body: "No class today guys! Use the free time to work on your projects and get caught up!",
        author: "Jillian Aurisano",
        courseId: "ui"
    },
    {
        date: "10/15/22",
        subject: "Project updates",
        body: "Be sure to send me an email describing how your projects have been going so far! I want to make sure everyone is understanding what we have been doing in class and I'll address any issues people are facing.",
        author: "Jillian Aurisano",
        courseId: "ui"
    },
    {
        date: "8/25/22",
        subject: "Welcome all!",
        body: "Hi everyone! So glad to have you in class this semester! Make sure to fill out the book of faces and intoduce yourself in the Discord server!",
        author: "Jillian Aurisano",
        courseId: "ui"
    },
    {
        date: "10/10/22",
        subject: "Form Project Teams",
        body: "If you haven't done so already, form a group of up to 4 people for your senior design project.",
        author: "Dr. Professor",
        courseId: "seniordesign"
    },
    {
        date: "9/2/22",
        subject: "Easiest class ever",
        body: "Just so you all don't stress out, just know this is the easiest class you'll ever take at UC. You literally just need to do it to graduate.",
        author: "Dr. Professor",
        courseId: "seniordesign"
    },
];

const AnnouncementList = (props) => {
    const courseId = props.courseId
    var courseAnnouncements = announcements.filter(function(ann){
        return ann.courseId === courseId;
    });

    if(courseAnnouncements.length === 0){
        return(
            <div className='noContentFound'>
                No announcements have been posted for this course.
            </div>
        )
    }

    return(
        <div className='announcementListWrapper'>
            {courseAnnouncements.map((ann, index) => {
                return (
                    <SingleAnnouncement key={index} announcementInfo={ann}/>
                );
            })}
        </div>
    );
};

export default AnnouncementList;

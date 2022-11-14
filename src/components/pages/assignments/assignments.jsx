import React from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/main.scss';
import { MdAssignment } from 'react-icons/md';
import Assignment from './assignment';

const Assignments = (props) => {
    const courseId = props.courseId;
    return (
        <div className='pageWrapper'>
            <h1 className='pageTitle'>Assignments <MdAssignment/></h1>
            <div className='assignments--assignmentList'>
                <Link to="1" style={{ textDecoration: 'none', color: 'black' }}>
                    <Assignment assignmentID="1" assignmentName="Assignment 1" dueDate="November 16" dueTime="11:59PM"/>
                </Link>
                <Link to="2" style={{ textDecoration: 'none', color: 'black' }}>
                    <Assignment assignmentID="2" assignmentName="Assignment 2" dueDate="November 17" dueTime="11:59PM"/>
                </Link>
            </div>
        </div>
    );
};

export default Assignments;
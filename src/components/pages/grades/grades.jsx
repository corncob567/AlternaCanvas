import React from 'react';
import '../../../styles/main.scss';
import { MdAssignmentTurnedIn } from 'react-icons/md';
import GradeList from './gradelist.jsx';

const Grades = (props) => {
    const courseId = props.courseId
    return (
        <div className='pageWrapper'>
            <h1 className='pageTitle'>Grades <MdAssignmentTurnedIn/></h1>
            <GradeList courseId={courseId}/>
        </div>
    );
};

export default Grades;
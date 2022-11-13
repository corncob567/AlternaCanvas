import React from 'react';
import '../../../styles/main.scss';
import { MdAssignmentTurnedIn } from 'react-icons/md';

const Grades = (props) => {
    const courseId = props.courseId
    return (
        <div className='pageWrapper'>
            <h1 className='pageTitle'>Grades <MdAssignmentTurnedIn/></h1>
        </div>
    );
};

export default Grades;
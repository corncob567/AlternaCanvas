import React from 'react';
import '../../../styles/main.scss';
import { MdAssignment } from 'react-icons/md';

const Assignments = (props) => {
    const courseId = props.courseId
    return (
        <div className='pageWrapper'>
            <h1 className='pageTitle'>Assignments <MdAssignment/></h1>
        </div>
    );
};

export default Assignments;
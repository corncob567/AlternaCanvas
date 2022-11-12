import React from 'react';
import '../../../styles/main.scss';

const Grades = (props) => {
    const courseId = props.courseId
    return (
        <div className='pageWrapper'>
            <h1 className='pageTitle'>Grades</h1>
        </div>
    );
};

export default Grades;
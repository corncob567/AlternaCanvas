import React from 'react';
import '../../../styles/main.scss';
import { MdAssignmentTurnedIn } from 'react-icons/md';
import GradeList from './gradelist.jsx';
import { useOutletContext } from 'react-router';

const Grades = (props) => {
    const courseId = props.courseId
    const [user] = useOutletContext();
    return (
        <div className='pageWrapper'>
            <h1 className='pageTitle'>Grades<MdAssignmentTurnedIn/></h1>
            <GradeList courseId={courseId} user={user}/>
        </div>
    );
};

export default Grades;
import React, { useState } from 'react';
import '../../styles/main.scss';
import { Link } from 'react-router-dom';

import AddCourse from '../../assets/AddCourse';
import BaruvasLogo from '../../assets/BaruvasLogo';
import CourseNav from './CourseNav';


function CourseSelector(props) {

    const {activeCourse, setActiveCourse, courseInfo, currChatName} = props;
    
    const Course = ({ courseName, isActive }) => {

        return (
            <div className={isActive ? 'courseSelector--course active' : 'courseSelector--course'}>
                {courseName}
            </div>
        )
    }
    console.log(activeCourse)
    
    return (
        <>
        <div className='courseSelector'>
            <BaruvasLogo setUser={props.setUser} setCurrChatName={props.setCurrChatName} user={props.user}/>
            <div className='courseSelector--courses'>
                <Link to='/ui/syllabus' onClick={() => setActiveCourse('ui')} style={{ textDecoration: 'none' }}>
                    <Course 
                        courseId='ui' 
                        courseName={courseInfo['ui'].courseName}
                        courseProfessor={courseInfo['ui'].courseProfessor}
                        courseImg={`../../assets/${courseInfo['ui'].courseImg}`}
                        isActive={activeCourse === 'ui'}
                    />
                </Link>
                <Link to='/compg/syllabus' onClick={() => setActiveCourse('compg')} style={{ textDecoration: 'none' }}>
                    <Course 
                        courseId='compg' 
                        courseName={courseInfo['compg'].courseName}
                        courseProfessor={courseInfo['compg'].courseProfessor}
                        courseImg={`../../assets/${courseInfo['compg'].courseImg}`} 
                        isActive={activeCourse === 'compg'}
                    />
                </Link>
                <AddCourse/>
            </div>
            
        </div>
        <div className='courseNav--container'>
            <CourseNav 
                courseID={activeCourse}
                courseName={courseInfo[`${activeCourse}`].courseName}
                courseImg={`../../assets/${courseInfo[`${activeCourse}`].courseImg}`}
                courseProfessor={courseInfo[`${activeCourse}`].courseProfessor}
                currChatName={currChatName}
                chats={props.chats}
                setCurrChatName={props.setCurrChatName}
                user={props.user}
            />
        </div>
        </>
    )
}
export default CourseSelector;
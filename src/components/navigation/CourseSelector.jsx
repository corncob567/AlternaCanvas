import React, { useState } from 'react';
import '../../styles/main.scss';
import { Link } from 'react-router-dom';

import AddCourse from '../../assets/AddCourse';
import BaruvasLogo from '../../assets/BaruvasLogo';
import CourseNav from './CourseNav';
import {BsPersonCircle} from 'react-icons/bs';


function CourseSelector(props) {

    const {activeCourse, setActiveCourse, courseInfo, currChatName} = props;
    
    const Course = ({ courseName, courseImg, courseColor }) => {

        const [isCurrent, setCurrent] = useState(false);

        return (
            <div className='course'>
                {courseName}
            </div>
        )
    }
    
    return (
        <>
        <div className='courseSelector'>
            <BaruvasLogo setUser={props.setUser} setCurrChatName={props.setCurrChatName} user={props.user}/>
            <div className='courseSelector--courses'>
                <Link to='/ui/syllabus' onClick={() => setActiveCourse('ui')}>
                    <Course 
                        className={activeCourse === 'ui' ? 'courseSelector--course active' : 'courseSelector--course'}
                        courseId='ui' 
                        courseName={courseInfo['ui'].courseName}
                        courseProfessor={courseInfo['ui'].courseProfessor}
                        courseImg={`../../assets/${courseInfo['ui'].courseImg}`}
                    />
                </Link>
                <Link to='/compg/syllabus' onClick={() => setActiveCourse('compg')}>
                    <Course 
                        className={activeCourse === 'compg' ? 'courseSelector--course active' : 'courseSelector--course'}
                        courseId='compg' 
                        courseName={courseInfo['compg'].courseName}
                        courseProfessor={courseInfo['compg'].courseProfessor}
                        courseImg={`../../assets/${courseInfo['compg'].courseImg}`} 
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
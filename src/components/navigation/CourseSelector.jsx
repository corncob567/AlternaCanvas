import React, { useState, useRef } from 'react';
import '../../styles/main.scss';
import { Link } from 'react-router-dom';

import AddCourse from '../../assets/AddCourse';
import Close from '../../assets/Close';
import OutsideClick from '../../assets/customHooks/OutsideClick';
import BaruvasLogo from '../../assets/BaruvasLogo';
import CourseNav from './CourseNav';
import { useLocation } from 'react-router-dom'

function CourseSelector(props) {

    const {activeCourse, setActiveCourse, courseInfo, currChatName, setCurrChatName, chats, user, renderSD, setSD} = props;

    const [inputVal, setInputVal] = useState('');
    const [validInput, setValidInput] = useState(true);
    const [addCourseModalOpen, setAddCourseModalOpen] = useState(false);

    // const modalRef = useRef();
    // OutsideClick(modalRef, () => setAddCourseModalOpen(false));

    const exitModal = (e) => {
        e.preventDefault();
        if (inputVal.toLowerCase() === 'seniordesign' && addCourseModalOpen) {  
            setSD(true);
            setAddCourseModalOpen(false);
            setInputVal('');
        }
        else {
            setAddCourseModalOpen(true);
            setValidInput(false);
            setInputVal('');
        }
    }

    const closeModal = () => {
        setAddCourseModalOpen(false);
        console.log(addCourseModalOpen)
        setInputVal('');
    }

    const Course = ({ courseName, courseId }) => {
        const location = useLocation();
        console.log(location.pathname.split('/')[1] === activeCourse);
        return (
            <div className={`courseSelector--course ${courseId === activeCourse ? "active" : ""}`}>
                {courseName}
            </div>
        )
    }
    
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
                    />
                </Link>
                <Link to='/compg/syllabus' onClick={() => setActiveCourse('compg')} style={{ textDecoration: 'none' }}>
                    <Course 
                        courseId='compg' 
                        courseName={courseInfo['compg'].courseName}
                        courseProfessor={courseInfo['compg'].courseProfessor}
                        courseImg={`../../assets/${courseInfo['compg'].courseImg}`} 
                    />
                </Link>
                {renderSD ? <Link to='/seniordesign/syllabus' onClick={() => setActiveCourse('seniordesign')} style={{ textDecoration: 'none' }}>
                    <Course 
                        courseId='seniordesign' 
                        courseName={courseInfo['seniordesign'].courseName}
                        courseProfessor={courseInfo['seniordesign'].courseProfessor}
                        courseImg={`../../assets/${courseInfo['seniordesign'].courseImg}`} 
                    />
                </Link> : ''}
                <div className='addCourse--container' onClick={() => setAddCourseModalOpen(true)}>
                    <AddCourse/>
                    {addCourseModalOpen ? <>
                        <form className='addCourse--modal' onSubmit={(e) => exitModal(e)}>
                            {/* <div className='closeIcon--container' onClick={() => closeModal()}><Close/></div> */}
                            <label htmlFor='addCourseName'>Enter Course ID:</label>
                            <div className='addCourse--modal-input'>
                                <input value={inputVal} id='addCourseName' onChange={(e) => setInputVal(e.target.value)}/>
                                <input type='submit' id='addCourseSubmit'/>
                            </div>
                            {validInput === false ? <p style={{ color: 'red' }}>Invalid course code</p> : <p></p>} 
                        </form> 
                    </>
                    : ''}
                </div>
                {addCourseModalOpen ? <div className='addCourse--modal-backdrop'/> : ''}
            </div>
        </div>
        <div className='courseNav--container'>
            <CourseNav 
                courseID={activeCourse}
                courseName={courseInfo[`${activeCourse}`].courseName}
                courseImg={`../../assets/${courseInfo[`${activeCourse}`].courseImg}`}
                courseProfessor={courseInfo[`${activeCourse}`].courseProfessor}
                currChatName={currChatName}
                chats={chats}
                setCurrChatName={setCurrChatName}
                user={user}
            />
        </div>
        </>
    )
}
export default CourseSelector;
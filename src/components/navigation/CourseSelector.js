import React, { useState } from 'react';
import '../../styles/main.scss';
import AddCourse from '../../assets/AddCourse';
import BaruvasLogo from '../../assets/BaruvasLogo';

const CourseSelector = () => {

    const [activeCourse, setActiveCourse] = useState('default');
    
    const Course = ({ courseName, courseImg, courseColor }) => {

        const [isCurrent, setCurrent] = useState(false);

        return (
            <div className='course'>
            </div>
        )
    }

    return (
        <div className='courseSelector'>
            <BaruvasLogo/>
            <div className='courseSelector--courses'>
                <Course/>
                <Course/>
                <Course/>
                <Course/>
                <Course/>
                <Course/>
                <Course/>
                <Course/>
                <AddCourse/>
            </div>
        </div>
    )
}
export default CourseSelector;
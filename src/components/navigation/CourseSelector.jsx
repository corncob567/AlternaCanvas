import React, { useState } from 'react';
import '../../styles/main.scss';
import { Link } from 'react-router-dom';

import AddCourse from '../../assets/AddCourse';
import BaruvasLogo from '../../assets/BaruvasLogo';
import courseImage1 from '../../assets/UIUX-designing-1.jpeg';

function CourseSelector(props) {

    const {activeCourse, setActiveCourse} = props;
    
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
                <Link to='/ui/syllabus'>
                    <Course courseId='ui' courseName='User Interface Design' courseProfessor='Dr. Aurisano' courseImg={courseImage1} onClick={() => setActiveCourse('ui')}/>
                </Link>
                <Course courseId='ui' courseName='User Interface Design' courseProfessor='Dr. Aurisano' courseImg={courseImage1}/>
                <Link to='/compg/syllabus'>
                    <Course courseId='compg' courseName='Computer Graphics' courseProfessor='Dr. Bingus' courseImg={courseImage1} onClick={() => setActiveCourse('compg')}/>
                </Link>
                <AddCourse/>
            </div>
        </div>
    )
}
export default CourseSelector;
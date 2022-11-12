import React from 'react';
import ModuleList from './modulelist.jsx';
import '../../../styles/main.scss';
import { GoFileSubmodule } from 'react-icons/go';

const Modules = (props) => {
    const courseId = props.courseId
    return (
        <div className='pageWrapper'>
            <h1 className='pageTitle'>Modules <GoFileSubmodule/></h1>
            <ModuleList courseId={courseId}/>
        </div>
    );
};

export default Modules;
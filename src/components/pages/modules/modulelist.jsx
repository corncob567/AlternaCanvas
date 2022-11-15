import React from 'react';
import SingleModule from './singlemodule.jsx';
import '../../../styles/main.scss';

const modules = [
    {
        title: "Introduction",
        downloads: ['01-01-intro.pptx', '01-02-usability.pptx', '01-03-norman-principals-discoverability.pptx'],
        pages: [],
        assignments: [],
        courseId: "ui"
    },
    {
        title: "User centered design- part 1 (week 2)",
        downloads: ['01-04-the-user-p1.pptx', '01-05-the-user-p2.pptx', '01-06-the-user-p3.pptx'],
        pages: [],
        assignments: [],
        courseId: "ui"
    },
    {
        title: "Sketching part 1 (week 3)",
        downloads: ['03-01-sketching-p1.pptx', '03-02-sketching-p2.pptx'],
        pages: [],
        assignments: [],
        courseId: "ui"
    },
    {
        title: "Let's get technical (week 4)",
        downloads: ['04-01-web-p1.pptx', '04-02-html-css.pptx', '04-03-css.pptx'],
        pages: [],
        assignments: [[1, 'React Tutorial']],
        courseId: "ui"
    },
    {
        title: "Let's get technical (week 5)",
        downloads: ['05-01-javascript-p1.pptx', '05-02-javascript-p1.pptx', '05-03-javascript-p1.pptx'],
        pages: [],
        assignments: [[2, 'React Webpage 1'], [3, 'React Webpage 2']],
        courseId: "ui"
    },
    {
        title: "Graphic Design, Layout, Color (week 6)",
        downloads: ['06-01-design-principles-p1.pptx', '06-02-design-principles-p2.pptx', '06-03-design-principles-color.pptx'],
        pages: [],
        assignments: [[4, 'React Final Project']],
        courseId: "ui"
    },
    {
        title: "Understanding people",
        downloads: ['07-02-people.pptx', '07-03-people.pptx', '08-02-people.pptx', '08-03-people.pptx'],
        pages: [],
        assignments: [],
        courseId: "ui"
    },
    {
        title: "Week 1",
        downloads: ['01.pptx'],
        pages: [],
        assignments: [[1, 'Proposal and Groups']],
        courseId: "seniordesign"
    },
    {
        title: "Week 2",
        downloads: ['02.pptx'],
        pages: [],
        assignments: [[2, 'Concept Designs']],
        courseId: "seniordesign"
    },
    {
        title: "Week 3",
        downloads: ['03.pptx'],
        pages: [],
        assignments: [[3, 'Prototype A']],
        courseId: "seniordesign"
    },
    {
        title: "Week 4",
        downloads: ['04.pptx'],
        pages: [],
        assignments: [[4, 'Advisor Review']],
        courseId: "seniordesign"
    },
    {
        title: "Week 5",
        downloads: ['05.pptx'],
        pages: [],
        assignments: [[5, 'User Interviews']],
        courseId: "seniordesign"
    },
    {
        title: "Week 6",
        downloads: ['06.pptx'],
        pages: [],
        assignments: [],
        courseId: "seniordesign"
    },
    {
        title: "Week 7",
        downloads: ['07.pptx'],
        pages: [],
        assignments: [[6, 'Prototype B']],
        courseId: "seniordesign"
    },
    {
        title: "Week 8",
        downloads: ['08.pptx'],
        pages: [],
        assignments: [],
        courseId: "seniordesign"
    },
    {
        title: "Week 1",
        downloads: ['01-01.pptx', '01-02.pptx', '01-03.pptx'],
        pages: [],
        assignments: [],
        courseId: "compg"
    },
    {
        title: "Week 2",
        downloads: ['02-01.pptx', '02-02.pptx', '02-03.pptx'],
        pages: [],
        assignments: [[1, 'Assignment 1']],
        courseId: "compg"
    },
    {
        title: "Week 3",
        downloads: ['03-01.pptx', '03-02.pptx'],
        pages: [],
        assignments: [],
        courseId: "compg"
    },
    {
        title: "Week 4",
        downloads: ['04-01.pptx', '04-02.pptx', '04-03.pptx'],
        pages: [],
        assignments: [[2, 'Assignment 2']],
        courseId: "compg"
    },
    {
        title: "Week 5",
        downloads: ['05-01.pptx', '05-02.pptx', '05-03.pptx'],
        pages: [],
        assignments: [],
        courseId: "compg"
    },
    {
        title: "Week 6",
        downloads: ['06-01.pptx', '06-02.pptx', '06-03.pptx'],
        pages: [],
        assignments: [[3, 'Assignment 3']],
        courseId: "compg"
    },
    {
        title: "Week 7",
        downloads: ['07-01.pptx', '07-02.pptx', '07-03.pptx'],
        pages: [],
        assignments: [],
        courseId: "compg"
    },
    {
        title: "Week 8",
        downloads: ['08-01.pptx', '08-02.pptx', '08-03.pptx'],
        pages: [],
        assignments: [],
        courseId: "compg"
    },
];

const ModuleList = (props) => {
    const courseId = props.courseId
    var courseModules = modules.filter(function(module){
        return module.courseId === courseId;
    });

    if(courseModules.length === 0){
        return(
            <div className='noContentFound'>
                No modules have been posted for this course.
            </div>
        )
    }

    return(
        <div className='moduleListWrapper'>
            {courseModules.map((module, index) => {
                if(module.courseId === courseId){
                    return (
                        <SingleModule key={index} moduleInfo={module}/>
                    );
                }
            })}
        </div>
    );
};

export default ModuleList;

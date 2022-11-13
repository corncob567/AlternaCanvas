import React from 'react';
import '../../../styles/main.scss';
import Accordion from 'react-bootstrap/Accordion';
import { MdFilePresent } from 'react-icons/md';
import { MdAssignment } from 'react-icons/md';
import { IoIosPaper } from 'react-icons/io';

const SingleModule = (props) => {
    const {title, downloads, pages, assignments, courseId} = props.moduleInfo;
    return (
        <div className={`singleModuleWrapper`}>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>{title}</Accordion.Header>
                    <Accordion.Body>
                    {downloads.map((download, index) => {
                        return (
                            <div key={index}>
                                <span className='iconSpan'><MdFilePresent />   </span>
                                <a href={'/components/pages/modules/presentations/' + courseId + '/' + download} download>{download}</a>
                            </div>
                        );
                    })}
                    {pages.map((page, index) => {
                        return (
                            <div key={index}>
                                <span className='iconSpan'><IoIosPaper />   </span>
                                <a href={'/components/pages/coursepages/' + courseId + '/' + page}>{page}</a>
                            </div>
                        );
                    })}
                    {assignments.map((assignment, index) => {
                        return (
                            <div key={index}>
                                <span className='iconSpan'><MdAssignment />   </span>
                                <a href={'/components/pages/assignments/' + courseId + '/' + assignment}>{assignment}</a>
                            </div>
                        );
                    })}
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default SingleModule;
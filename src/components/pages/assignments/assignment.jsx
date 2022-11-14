import React from 'react';
import '../../../styles/main.scss';
import AssignmentChat from './AssignmentChat';

const Assignment = ({ assignmentID, assignmentName, dueDate, dueTime }) => {
    
    return (
        <div className='assignment'>
            <div>
                <h2 style={{ textDecoration: 'none' }}>{assignmentName}</h2>
                <p style={{ fontStyle: 'italic', textDecoration: 'none' }}>{dueDate} @ {dueTime}</p> 
            </div>

            <AssignmentChat></AssignmentChat>
        </div>
    );
};

export default Assignment;
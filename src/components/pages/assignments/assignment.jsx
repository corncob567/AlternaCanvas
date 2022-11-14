import React from 'react';
import '../../../styles/main.scss';

const Assignment = ({ assignmentID, assignmentName, dueDate, dueTime }) => {
    
    return (
        <div className='assignment'>
            <h2 style={{ textDecoration: 'none' }}>{assignmentName}</h2>
            <p style={{ fontStyle: 'italic', textDecoration: 'none' }}>{dueDate} @ {dueTime}</p>
        </div>
    );
};

export default Assignment;
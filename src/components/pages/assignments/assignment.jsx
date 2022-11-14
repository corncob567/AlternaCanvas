import React, { useState } from 'react';
import '../../../styles/main.scss';

const Assignment = ({ assignmentID, assignmentName, dueDate, dueTime }) => {
    const [isHover, setHover] = useState(false)
    
    return (
        <>
        <div className='assignment' onMouseOver={() => setHover(true)}>
            <h2 style={{ textDecoration: 'none' }}>{assignmentName}</h2>
            <p style={{ fontStyle: 'italic', textDecoration: 'none' }}>{dueDate} @ {dueTime}</p>
        </div>
        {isHover ? <div className='assignment--hoverMenu'>
            
        </div> : ''}
        </>
    );
};

export default Assignment;
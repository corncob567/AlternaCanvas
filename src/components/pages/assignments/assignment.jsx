import React, { useState } from 'react';
import '../../../styles/main.scss';
import ChatBubble from '../../../assets/ChatBubble';
import NotifBell from '../../../assets/NotifBell';

const Assignment = ({ assignmentID, assignmentName, dueDate, dueTime, setChatData, user}) => {
    const [isHover, setHover] = useState(false)

    return (
        <>
        <div className='assignment' onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)}>
            <h2 style={{ textDecoration: 'none' }}>{assignmentName}</h2>
            <p style={{ fontStyle: 'italic', textDecoration: 'none' }}>{dueDate} @ {dueTime}</p>
            {isHover ? 
                <div className='assignment--hoverMenu'>
                    <div className='chatBubbleIcon'>
                        <ChatBubble setChatData={setChatData} user={user} assignmentName={assignmentName}/>
                    </div>
                    <NotifBell/>
                </div> 
            : ''}
        </div>
        
        </>
    );
};

export default Assignment;
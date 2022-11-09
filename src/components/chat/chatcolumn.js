import React from 'react';
import './chatcolumn.scss';

const ChatColumn = () => {
    return (
        <div className='chat-column'>
            <div>
                <h1>Chat</h1>
                <ul>
                    <li className='sent'>some chat</li>
                    <li className='sent'>some more chat</li>
                    <li className='sent'>some additional chat</li>
                    <li className='received'>baru wuz here</li>
                    <li className='received'>corn</li>
                    <li className='received'>testing</li>
                    <li className='sent'>some chat</li>
                </ul>
            </div>
        </div>
    );
}

export default ChatColumn;
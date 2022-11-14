import React from 'react';
import ProfilePicture from './ProfilePicture';

import '../../styles/components/Chat.scss'

function ChatMessage(props) {
    if (props.author === props.user){
        return (
        
            <div className='author-container'>
                <p className='chat-message-author'>{props.content}</p>
            </div>
        )
    }
    return (
        
        <div className='sender-container'>
            <div className='pfp'><ProfilePicture url='https://media.geeksforgeeks.org/wp-content/uploads/20210425000233/test-300x297.png' maxHeight={30}></ProfilePicture></div>

            <p className='chat-message' style={{margin: 0}}>{props.content}</p>
            <p className='chat-time'>{(new Date()).getHours() + ":" + (new Date()).getMinutes()}</p>
        </div>
    )

}

export default ChatMessage
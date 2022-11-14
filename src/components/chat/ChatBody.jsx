import React, { useEffect } from 'react';
import ChatMessage from './ChatMessage';

import '../../styles/components/Chat.scss'

function ChatBody(props) {
    return (
        <div className='chat-body'>
            {props.messages.data.map((message, index) => {
                return <ChatMessage key={index} className={message.author === props.user ? 'right-align' : ''}content={message.content} author={message.author} user={props.user}></ChatMessage>
            })}
        </div>
        
    )

}

export default ChatBody
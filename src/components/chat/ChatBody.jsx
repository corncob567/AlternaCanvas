import React from 'react';
import ChatMessage from './ChatMessage';

function ChatBody(props) {
    return (
        <div className='chat-body'>
            {props.messages.map((message, index) => {
                return <ChatMessage key={index} content={message.content} author={message.author}></ChatMessage>
            })}
        </div>
        
    )

}

export default ChatBody
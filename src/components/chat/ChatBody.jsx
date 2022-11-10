import React from 'react';

import '../../styles/chat.css'
import ChatMessage from './ChatMessage';

function ChatBody(props) {
    return (
        <div>
            {props.messages.map((message) => {
                return <ChatMessage content={message.content} author={message.author}></ChatMessage>
            })}
        </div>
    )

}

export default ChatBody
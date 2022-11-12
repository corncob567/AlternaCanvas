import React from 'react';

import '../../styles/components/Chat.scss'

function ChatMessage(props) {
    return (
        <div>
            <p className={props.author === 'true' ? 'chat-message-author': ''}>{props.content}</p>
        </div>
    )
}

export default ChatMessage
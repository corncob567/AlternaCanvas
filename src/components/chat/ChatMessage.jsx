import React from 'react';

import '../../styles/main.scss'

function ChatMessage(props){
    return (
        <div>
            <p>{props.content}</p>
        </div>
    )
}

export default ChatMessage
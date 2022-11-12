import React from 'react';
import '../../styles/main.scss';

export default function ChatSelect(props){
    return (
        <li>
            <a onClick={props.click}>{props.chatName}</a>
        </li>
    )
}
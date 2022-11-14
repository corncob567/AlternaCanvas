import React from 'react';
import '../../styles/main.scss';

export default function ChatSelect(props){
    return (
        <li className={`chatSelectItem${props.currChatName === props.chatName ? "--active" : ""}`}>
            <a className='chatSelectItemTag' onClick={() => props.setCurrChatName(props.chatName)}>{props.chatName}</a>
        </li>
    )
}
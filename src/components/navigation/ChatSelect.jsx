import React from 'react';
import '../../styles/main.scss';

export const getDisplayName = (userName) => {
    switch(userName){
        case 'alex':
            return "Alex Mills";
        case 'daniel':
            return "Daniel Hackney";
        case 'liz':
            return "Liz Tremblay";
        case 'baru':
            return "Baru Yogesh";
        default:
            return userName;
    }
}

export default function ChatSelect(props){
    return (
        <li className={`chatSelectItem${props.currChatName === props.chatName ? "--active" : ""}`}>
            <a className='chatSelectItemTag' onClick={() => props.setCurrChatName(props.chatName)}>{getDisplayName(props.chatName)}</a>
        </li>
    )
}
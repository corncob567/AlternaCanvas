import React from 'react';
import '../../styles/main.scss';
import ChatSelect from './ChatSelect';
import {FiMessageSquare} from 'react-icons/fi';

const ChatSelector = (props) => {
    const chats = props.chats;
    const user = props.user;
    const currChatName = props.currChatName;
    const setCurrChatName = props.setCurrChatName;

    return (
        <ul className='courseNav--chats'>
            <li className='chatNavTitle'>
                Chats <FiMessageSquare></FiMessageSquare>
            </li>
            {chats.map((chat, index) => {
                if (chat === user){
                    return null;
                }
                return (<ChatSelect key={index} currChatName={currChatName} chatName={chat.startsWith('assn-') ? chat.substring(5) : chat} setCurrChatName={setCurrChatName}></ChatSelect>);
            })}
        </ul>
    );
};

export default ChatSelector;
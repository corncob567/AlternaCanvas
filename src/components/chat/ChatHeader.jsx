import React from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import ProfilePicture from "./ProfilePicture";
import '../../styles/main.scss'
import {BsUpload, BsPeople, BsInfoCircle } from 'react-icons/bs'


function ChatButtons() {
    return (
        <div>
            <ButtonGroup>
                <Button variant="outline-secondary"><BsUpload/></Button>
                <Button variant="outline-secondary"><BsPeople/></Button>
                <Button variant="outline-secondary"><BsInfoCircle/></Button>
            </ButtonGroup>
        </div>
    )
}

function ChatHeader(props) {
    return (
        <div className='chat-header' fluid>
            <ProfilePicture url={props.url} maxHeight={50}></ProfilePicture>
            <p className='chatName'>{props.name}</p>
            <ChatButtons></ChatButtons>
        </div>

    )
}

export default ChatHeader;
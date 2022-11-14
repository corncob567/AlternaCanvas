import React from 'react';

import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import ProfilePicture from "./ProfilePicture";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {BsUpload, BsPeople, BsInfoCircle } from 'react-icons/bs'

import '../../styles/main.scss'

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
        <Container className='chat-header' fluid>
            <Row>
                <Col>
                    <ProfilePicture url={props.url} maxHeight={50}></ProfilePicture>
                </Col>
                <Col className='align-self-center'>
                    <p style={{margin: 0}}>{props.name}</p>
                </Col>
                <Col>
                    <ChatButtons></ChatButtons>
                </Col>
            </Row>
        </Container>

    )
}

export default ChatHeader;
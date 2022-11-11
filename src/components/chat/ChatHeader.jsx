import React from 'react';

import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import ProfilePicture from "./ProfilePicture";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../../styles/main.scss'

function ChatButtons() {
    return (
        <div>
            <ButtonGroup>
                <Button variant="secondary">Left</Button>
                <Button variant="secondary">Middle</Button>
                <Button variant="secondary">Right</Button>
            </ButtonGroup>
        </div>
    )
}

function ChatHeader(props) {
    return (
        <Container className='chat-header' fluid>
            <Row>
                <Col>
                    <ProfilePicture url={props.url}></ProfilePicture>
                </Col>
                <Col>
                    <p>{props.name}</p>
                </Col>
                <Col>
                    <ChatButtons></ChatButtons>
                </Col>
            </Row>
        </Container>

    )
}

export default ChatHeader;
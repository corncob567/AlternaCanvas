import ChatHeader from "./ChatHeader"
import ChatInput from "./ChatInput"
import ChatBody from './ChatBody'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import React from "react";

function ChatWindow(props) {

    return (
        <Container fluid>
            <Row lg={1}>
                <ChatHeader name={props.currChatName} url="https://media.geeksforgeeks.org/wp-content/uploads/20210425000233/test-300x297.png"></ChatHeader>
            </Row>
            <Row>
                <ChatBody messages={props.currChatData}></ChatBody>
            </Row>
            <Row lg={1}>
                <ChatInput addMessage={props.setChatData} currChatName={props.currChatName}></ChatInput>
            </Row>
        </Container>
    )
}



export default ChatWindow;
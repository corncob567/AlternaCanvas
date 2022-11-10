import ChatHeader from "./chat/ChatHeader"
import ChatInput from "./chat/ChatInput"
import ChatBody from './chat/ChatBody'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import React, { useState } from "react";

function ChatWindow(props){
    const [messages, addMessages] = useState([{"content":"test1", "author": "false"}, {"content":"test2", "author": "true"}])
    return (
        <Container fluid>
            <Row lg={1}>
                <ChatHeader name='baru' url="https://media.geeksforgeeks.org/wp-content/uploads/20210425000233/test-300x297.png"></ChatHeader>
            </Row>
            <Row md="auto">
                <ChatBody messages={messages}></ChatBody>
            </Row>
            <Row lg={1}>
                <ChatInput></ChatInput>
            </Row>
        </Container>



    )
}



export default ChatWindow;
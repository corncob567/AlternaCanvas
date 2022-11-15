import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import { useState } from 'react';
import '../../styles/main.scss';


function ChatInput(props){

    const [value, setValue] = useState(),
        onInput = ({target:{value}}) => setValue(value)

    function handleClick(){
        props.addMessage(messages => {
            // messages[props.currChatName].data = [...messages[props.currChatName].data, {'content': value, 'author': true}]
            // return messages
            let messagesCopy = JSON.parse(JSON.stringify(messages));
            let currentMessages = messagesCopy[props.user][props.currChatName].data.slice();
            currentMessages.push( {'content': value, 'author': props.user, 'time': Date.now()});
            messagesCopy[props.user][props.currChatName].data = currentMessages;
            return messagesCopy;
        })
        setValue(value => value = '');
    }

    function handleKeyPress(event) {
        if (event.key === 'Enter') {
            handleClick()
    }};

    return (
        <InputGroup className='chatInputGroup'>
            <Form.Control aria-label="With textarea" onChange={onInput} value={value || ''} onKeyDownCapture={handleKeyPress}/>   
            <Button type='submit' variant="outline-secondary" onClick={handleClick}>Send</Button>
        </InputGroup>
    )
}


export default ChatInput
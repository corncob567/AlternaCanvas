import React from 'react';

import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import { useState } from 'react';

function ChatInput(props){

    const [value, setValue] = useState(),
        onInput = ({target:{value}}) => setValue(value)

    function handleClick(){
        props.addMessage(messages => [...messages, {'content': value, 'author': 'true'}])
        setValue(value => value = '');
    }

    function handleKeyPress(event) {
        if (event.key === 'Enter') {
            handleClick()
    }};

    return (
        <InputGroup>
            <Form.Control aria-label="With textarea" onChange={onInput} value={value} onKeyDownCapture={handleKeyPress}/>   
            <Button type='submit' variant="outline-secondary" onClick={handleClick}>Send</Button>
        </InputGroup>
    )
}


export default ChatInput
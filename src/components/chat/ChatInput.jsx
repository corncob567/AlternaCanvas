import React from 'react';

import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import { useState } from 'react';

function ChatInput(props){

    const [value, setValue] = useState(0),
        onInput = ({target:{value}}) => setValue(value),
        onFormSubmit = e => {
          e.preventDefault()
          console.log(value)
          setValue()
        }

    return (
        <InputGroup>
            <Form.Control aria-label="With textarea" onChange={onInput} value={value}/>   
            <Button variant="outline-secondary">Send</Button>
        </InputGroup>
    )
}


export default ChatInput
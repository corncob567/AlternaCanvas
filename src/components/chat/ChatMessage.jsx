import React from 'react';
import ProfilePicture from './ProfilePicture';
import '../../styles/main.scss'

function ChatMessage(props) {

    const makeDate = () => {
        let now = new Date()
        let hours = now.getHours()

        if (hours > 12) {
            hours -= 12;
        }

        let minutes = now.getMinutes().toString()

        if ((minutes).length === 1){
            minutes = '0' + minutes;
        }

        return hours.toString() + ":" + minutes;
    }
    if (props.author === props.user){
        return (
        
            <div className='author-container'>
                <p className='chat-message-author' style={{margin: 0}}>{props.content}</p>
                <p className='chat-time'>{makeDate()}</p>

            </div>
        )
    }
    return (
        
        <div className='sender-container'>
            <div className='pfp'><ProfilePicture url='https://media.geeksforgeeks.org/wp-content/uploads/20210425000233/test-300x297.png' maxHeight={30}></ProfilePicture></div>

            <p className='chat-message' style={{margin: 0}}>{props.content}</p>
            <p className='chat-time'>{makeDate()}</p>
        </div>
    )

}

export default ChatMessage
import '../../styles/chat.css'

function ChatMessage(props){
    return (
        <div>
            <p>{props.content}</p>
        </div>
    )
}

export default ChatMessage
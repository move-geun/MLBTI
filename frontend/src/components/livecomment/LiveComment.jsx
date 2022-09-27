// import { useEffect, useImperativeHandle } from "react";
import { useEffect } from "react";
import { useState } from "react";


import {
    LiveCommentContainer,
    CommentBox,
    Bubble,
    CommentSendContainer, 
    CommentText, 
    CommentBtn,
} from "./LiveComment.style";


const LiveComment = () => {

// 서버 상태 저장, input창에 받아온 메세지 저장, 서버에서 받아온 메세지 저장
// const [serverState, setServerState] = useState('Loading...');
// const [setServerState] = useState('Loading...');
const [typingComments, setTypingComments] = useState('');
// const [messageText, setMessageText] = useState('');
// const [setMessageText] = useState('');
const [serverMessageList, setServerMessageList] = useState([]);

    // 웹소켓
    const webSocket = new WebSocket("ws://localhost:8081/teamName"); 


    const onEnter = (e) => {
        if(e.key === 'Enter'){
            onSendComments();
        }
    }
    const onTypingComments = (event) => {
        setTypingComments(event.target.value);
    }

    webSocket.onmessage = function(message) {
        console.log("서버에서 온 메세지", message);
        setServerMessageList([...serverMessageList, message.data]);

    }


    const onSendComments = ((e) => {
        const deleteContent = typingComments.trim() === "";
        e.preventDefault();
        console.log("클라 send");
        // let str = JSON.stringify({user: 'MM', message: messageText});
        // let str = {user: 'MM', messageText: typingComments};

        webSocket.send(typingComments);
        // ServerMessagesList([...serverMessageList, typingComments]);
        setTypingComments('');
      
    })

    

    useEffect(()=> {

        webSocket.onopen = function(){
            console.log("서버와 웹소켓 연결 성공");
        };
   
    }, [])



    return (
        <LiveCommentContainer>
            <CommentBox>
                {serverMessageList.map((comment, index) => {
                    console.log("commnet", comment);
                    if(comment !== null) {
                        return(
                            <Bubble>{comment}</Bubble>
                        )
                    }
                
            })}

            </CommentBox>
            <CommentSendContainer>
                <CommentText 
                value={typingComments}
                onChange={onTypingComments}
                onKeyPress = {onEnter}/>
                <CommentBtn onClick={onSendComments}>전송하기</CommentBtn>
            </CommentSendContainer>
        </LiveCommentContainer>
    )
}

export default LiveComment;
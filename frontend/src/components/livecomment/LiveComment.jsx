// import { useEffect, useImperativeHandle } from "react";
import { useEffect } from "react";
import { useState } from "react";
// import axios from 'axios';

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
    const [serverMessages, setServerMessages] = useState(
        [{
            user: 'MM',
            messageText: '야규 넘 재밌어요',
        },{
            user: '동우',
            messageText: '치킨 먹으면서 봐야겠어요~~',
        },{
            user: '예림',
            messageText: '홈런 고고고',
        }]
        );



    // const serverMessagesList =  new Array();
    const serverMessagesList =  [];
    // const Message = new Object();
    const Message = {};
    serverMessagesList.push(Message);



    // 웹소켓
    const webSocket = new WebSocket("ws:/j7e202.p.ssafy.io:8081/teamName");

    webSocket.onopen = function(){
        console.log("서버와 웹소켓 연결 성공");
    };

    //서버에서 메세지가 왔을 때, 데이터 파싱후 serverMesageList에 넣은 후 서버 메세지의 상태에 추가
    webSocket.onmessage = function(event) {
        console.log(event.data);
        webSocket.send("클라이언트에서 서버로 답장 보내요~");

        let parse = JSON.parse(event.data);
        serverMessagesList.push(parse);
        setServerMessages([...serverMessagesList]);
    }



    const onTypingComments = (event) => {
        setTypingComments(event.target.value);
    }

    const onSendComments = ((e) => {
        // const deleteContent = typingComments.trim() === "";
        e.preventDefault();
        // 서버 만들어졌을 때
        // let str = JSON.stringify({user: 'MM', message: messageText});

        let str = {user: 'MM', messageText: typingComments};
        // webSocket.send(str);
        setServerMessages([...serverMessages, str]);
        console.log("출력", serverMessages);
        setTypingComments('');
      
    })

    

    useEffect(()=> {

        // const comments = [...allComments];
        // const {email, content, time} = comments;
        
       

        // axios.get()
        // .then(function(result){
        //     setAllComments(result);
    
        //   }).catch(function(err){
        //     console.log(err);
        //   });
    }, [])

    useEffect(()=> {

        // const comments = [...allComments];
        // const {email, content, time} = comments;
        
       

        // axios.get()
        // .then(function(result){
        //     setAllComments(result);
    
        //   }).catch(function(err){
        //     console.log(err);
        //   });
    }, [setServerMessages])



    return (
        <LiveCommentContainer>
            <CommentBox>
                {serverMessages.map((comment, index) => {
                return(
             
                    <Bubble>{comment.user} : {comment.messageText}</Bubble>
                )
            })}

            </CommentBox>
            <CommentSendContainer>
                <CommentText 
                value={typingComments}
                onChange={onTypingComments}/>
                <CommentBtn onClick={onSendComments}>전송하기</CommentBtn>
            </CommentSendContainer>
        </LiveCommentContainer>
    )
}

export default LiveComment;
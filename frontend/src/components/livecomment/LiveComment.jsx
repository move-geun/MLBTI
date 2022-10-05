// import { useEffect, useImperativeHandle } from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "../../api/http";


import {
    LiveCommentContainer,
    CommentBox,
    Bubble,
    CommentSendContainer, 
    CommentText, 
    CommentBtn,
} from "./LiveComment.style";
import { useDispatch } from "react-redux";
import { myprofile } from "../../pages/profile/myprofile-slice";

const LiveComment = () => {

const [typingComments, setTypingComments] = useState('');
const [serverMessageList, setServerMessageList] = useState([]);
const [userEmail, setUserEmail] = useState();
const dispatch = useDispatch();

    // 웹소켓
    const webSocket = new WebSocket("wss://j7e202.p.ssafy.io:8081/teamName"); 

    // const webSocket = new WebSocket("ws://localhost:8081/teamName"); 




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
       
        var data = JSON.parse(message.data);
        console.log("daaataaa  ", data);
        const obj = {};
        obj.id = data.id;
        obj.message = data.message;
        
        console.log("obj", obj);
        setServerMessageList([...serverMessageList, obj]);

    }


    const onSendComments = ((e) => {
        const deleteContent = typingComments.trim() === "";
        e.preventDefault();
        const obj2 = {};
        obj2.csendTosId = userEmail;
        obj2.csendTosMessage = typingComments;
        webSocket.send(JSON.stringify(obj2));
        setTypingComments('');

      
    })

    
    useEffect(()=> {
        webSocket.onopen = function(){
            console.log("서버와 웹소켓 연결 성공");
        };
        dispatch(myprofile()).unwrap().then((res) => {
            console.log("Resssssss ", res);
            setUserEmail(res.data.userId);
        })
    }, []);



    return (
        <LiveCommentContainer>
            <CommentBox>
                {serverMessageList.map((comment, index) => {
                    console.log("commnet", comment);
                    if(comment !== null) {
                        return(
                            <Bubble>{comment.id} : {comment.message}</Bubble>
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
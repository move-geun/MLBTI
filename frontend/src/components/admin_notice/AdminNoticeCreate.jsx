import React from 'react';
import { useState } from "react";
import {
    PostBtn
} from "./AdminNotice.style";
import axios from 'axios';


const AmdinNoticeCreate = ({handleClose}) => {

const [Notitle, setNoTitle] = useState('');
const [Nocontent, setNoContent] = useState('');

const onPost = (e) => {
    e.preventDefault();


    let str = {title: Notitle, content: Nocontent};

    axios.post(process.env.REACT_APP_DB_HOST+`/notice`, {
     
        cotent: Nocontent,
        title: Notitle,
        user_uid: 2,
        
    })
    .then(function(res){
        handleClose();
    }).catch(function(err){
    })

}

return (
    <>
      <h2>게시판 글쓰기</h2>
       <span> 제목</span>
       <input placeholder='제목을 입력하세요' onChange={(e) => setNoTitle(e.target.value)}/>
        <div/>
       <span> 내용</span>
       <textarea placeholder='내용을 입력하세요' onChange={(e) => setNoContent(e.target.value)}></textarea>
        <PostBtn onClick = {onPost}> 등록 </PostBtn>

    </>
  )
} 

export default AmdinNoticeCreate;
import { useLocation, useNavigate} from "react-router-dom";
import React, {useState } from 'react';
import {
    ModifyBtn,
    DeleteBtn,
} from "./AdminNotice.style";
import axios from "axios";
import Swal from "sweetalert2";


const AmdinNoticeDetail = ({prop}) => {
    
    const [ data ] = useState({});
    const location = useLocation();
    const notice = location.state;

    let navigate = useNavigate();


    const onDelete = (e) => {
        e.preventDefault();
      
        Swal.fire({
            icon: "warning",
            title: "삭제",
            text: `[${notice.title}] 삭제 하시겠습니까??`,
            showCancelButton: true,
            confirmButtonText: "삭제",
            cancelButtonText: "취소",
        }).then((res) => {
            /* Read more about isConfirmed, isDenied below */
            if (res.isConfirmed) {
                axios.delete(process.env.REACT_APP_DB_HOST+`/notice/${notice.uid}`)
                    .then((res) => {
                        Swal.fire( '삭제 완료', '삭제되었습니다.', 'success',);
                        navigate("/admin");
                    })
                    .catch(function(err){
                     });
            }
            else{
                //취소
            }
        });
    }
    

    return (
        <>
        <h2 align="center">공지사항</h2>

        <div className="post-view-wrapper">
            {
            data ? (
                <>
                <div className="post-view-row">
                    <label>제목</label>
                    <span>{ notice.title }</span>
                </div>
                <div className="post-view-row">
                    <label>작성자</label>
   
                    <label>{ notice.writer }</label>
                </div>
                <div className="post-view-row">
                    <label>내용</label>
                    <div>{notice.content}</div>
     
                </div>
                </>
            ) : '해당 게시글을 찾을 수 없습니다.'
            }
            <ModifyBtn > 글 수정하기 </ModifyBtn>
            <DeleteBtn onClick={onDelete}> 글 삭제하기 </DeleteBtn>
        </div>
        

        </> 
    )
} 

export default AmdinNoticeDetail;
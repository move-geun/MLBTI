import React from 'react';

import { useEffect, useState } from 'react';
import { Link  } from 'react-router-dom';


import axios from 'axios';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Modal from '../Modal/Modal';
import {  NoticeTableContainer, CreateBtn} from "./NoticeTable.style";


const AmdinNotice = () => {

  const [posts, setPosts] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

  
    useEffect(()=>{
      axios.get(process.env.REACT_APP_DB_HOST+`/notice`)
      .then((res) => {
        setPosts(res.data);
  
      }).catch(function(err){
      });
    },[]);
  
  
    const onCreate = () => {
      setIsOpen(true);
    }

  return (
    <>
    <NoticeTableContainer>
    <TableContainer>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <TableCell>글 제목</TableCell>
            <TableCell align='right'>작성자</TableCell>              
          </TableRow>
        </TableHead>
        <TableBody>
          {posts.map((item) => (

              <TableRow>
                <Link 
                  to = {`/notice/${item.uid}`}
                  state = {{
                    uid: item.uid,
                    title: item.title,
                    writer: item.user.nickname,
                    content: item.content,
                    }}>
                  <TableCell component="th" scope="row">
                    {item.title}
                  </TableCell>
                </Link>
              <TableCell align="right">{item.user.nickname}</TableCell>           
            </TableRow>  
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <CreateBtn onClick = {onCreate}> 글 작성하기</CreateBtn>
    {isOpen && (<Modal open = {isOpen} onClose = { ()=> {
      setIsOpen(false);
    }}
    
    />)}
    
    </NoticeTableContainer>
    </>
  );
 
} 

export default AmdinNotice;


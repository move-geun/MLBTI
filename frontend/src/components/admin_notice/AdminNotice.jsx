import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {
    CreateBtn
} from "./AdminNotice.style";
import { Link , useNavigate } from 'react-router-dom';
import Modal from '../Modal/Modal';



// 테이블
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { ClassNames } from '@emotion/react';
import AmdinNoticeCreate from './AdminNoticeCreate';

import {
  AppWrap,
  Button,
} from "./AdminNotice.style";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#2565d0',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);


const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const AmdinNotice = () => {

  const [posts, setPosts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(()=>{
    axios.get(process.env.REACT_APP_DB_HOST+`/notice`)
    .then((res) => {
      console.log("Res    ", res);
      setPosts(res.data);

    }).catch(function(err){
      console.log(err);
    });
  },[]);


  const onCreate = () => {
    setIsOpen(true);
  }


  return (
    <>
    <AppWrap>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>글 제목</StyledTableCell>
            <StyledTableCell align="right">작성자</StyledTableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {posts.map((item) => (

              <StyledTableRow>
                <Link 
                  to = {`/notice/${item.uid}`}
                  state = {{
                    uid: item.uid,
                    title: item.title,
                    writer: item.user.nickname,
                    content: item.content,
                    }}>
                  <StyledTableCell component="th" scope="row">
                    {item.title}
                  </StyledTableCell>
                </Link>
              <StyledTableCell align="right">{item.user.nickname}</StyledTableCell>           
            </StyledTableRow>  
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <CreateBtn onClick = {onCreate}> 글 작성하기</CreateBtn>
    {isOpen && (<Modal open = {isOpen} onClose = { ()=> {
      setIsOpen(false);
    }}
    
    />)}
    
    </AppWrap>
    </>
  );

} 

export default AmdinNotice;





  // return (
  //   <NoticeList>
  //   {posts.map((item,index) => {
  //       return (
  //         <NoticeItem>
  //           <span>{item.title}</span>
  //           <span>{item.user.nickname}</span>
  //         </NoticeItem>
  //       )      
  //   })}
  // <Table>ggg</Table>
  //  </NoticeList>
  // )

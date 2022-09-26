
import styled from "styled-components";

const LiveCommentContainer= styled.form`
  position: relative;
  width: 300px;
  height: 350px;
  border : 1px solid #ccc;

`
const CommentBox = styled.div`
  width: 300px;
  height: 320px;
`
const Bubble = styled.div`
  background-color: lightgrey;
  border-radius: 5px;
  box-shadow: 0px 0px 6px #B2B2B2;
  height: 2em;
  margin: 10px;
  width:  200px;
  padding: 0.6em;
  font-size: 60%;
  

`

const CommentSendContainer = styled.div`
  position: relative;
  margin-top: 20px;
  width: 300px;


`;

const CommentText = styled.input`
  width: 100%;
  /* border-radius: 50px; */
  border : 1px solid #ccc;
  padding : 10px 100px 10px 20px;
  line-height: 1;
  box-sizing: border-box;
  outline: none;
`;


const CommentBtn = styled.button`
  position: absolute;
  right: 3px; 
  top: 3px;
  bottom: 3px;
  background: #2565d0;
  color: #fff;
  outline: none;
  margin: 0;
  padding: 0 10px;
  border-radius: 50px;
  z-index: 2;

`



export {LiveCommentContainer,CommentBox, Bubble, CommentSendContainer, CommentText, CommentBtn};
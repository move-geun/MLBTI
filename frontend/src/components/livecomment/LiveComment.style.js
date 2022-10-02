
import styled from "styled-components";

const LiveCommentContainer= styled.form`
  position: relative;
  width: 80%;
  height: 80%;
  border : 1px solid #ccc;

`
const CommentBox = styled.div`
  width: 100%;
  height: 80%;
  background-color: white;
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

  margin-top: 5rem;
  width: 100%;


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
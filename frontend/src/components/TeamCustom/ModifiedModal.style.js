import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 9999;
`;

const ModalWrap = styled.div`
  height: 200px;
  width: 600px;
  border-radius: 15px;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const CloseButton = styled.div`
  float: right;
  color: blue;
  float: right;
  width: 40px;
  height: 40px;
  cursor: pointer;
  i {
    color: #5d5d5d;
    font-size: 30px;
  }
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  h1 {
    font-size: 30px;
    font-weight: 600;
    margin: 0;
    color: #be2018;
  }
  
  .buttonDiv {
    display: flex;
    justify-content: space-around;
    width: 30%;
    
    .close{
      &:hover {
        letter-spacing: 2px;
        transform: scale(1);
        background-color: #be2018;
        cursor: pointer;
    }
      
    }
  }
`;


const Button = styled.button`
    /* margin: 20px; */
    position: relative;
    border: none;
    display: inline-block;
    padding: 0.5rem 0.7rem;
    border-radius: 15px;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
    text-decoration: none;
    transition: 0.25s;
    background-color: #a3a1a1;
    color: #e3dede;

    &:hover {
        letter-spacing: 2px;
        transform: scale(1);
        background-color: #06b729;
        cursor: pointer;
    }
    /* 2565d0 */

    
`;

export { Overlay, ModalWrap, Button, Contents, CloseButton };

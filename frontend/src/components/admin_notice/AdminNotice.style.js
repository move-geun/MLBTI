import styled from "styled-components";

const NoticeList = styled.div`
    background-color: gold;
    padding: 1em;
`;

const NoticeItem = styled.div`
    border-radius: 5px;
    background-color: salmon;
    margin: 1em;
    padding: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const ModifyBtn = styled.button`
    margin: 20px;
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

        transform: scale(1.2);
        background-color: #2565d0;
        cursor: pointer;
    }

    

`
const DeleteBtn = styled.button`
    margin: 20px;
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
        transform: scale(1.2);
        background-color: #2565d0;
        cursor: pointer;
    }

`
const CreateBtn = styled.button`
    margin: 20px;
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
        transform: scale(1.2);
        background-color: #2565d0;
        cursor: pointer;
    }

`
const PostBtn = styled.button`
    margin: 20px;
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
        transform: scale(1.2);
        background-color: #2565d0;
        cursor: pointer;
    }

`

const AppWrap = styled.div`
    text-align: center;
    margin: 50px auto;

`
const Button = styled.button`
    font-size: 14px;
    padding: 10px 20px;
    border: none;
    background-color: #ababab;
    border-radius: 10px;
    color: white;
    font-style: italic;
    font-weight: 200;
    cursor: pointer;
    &:hover {
        background-color: #898989;
    }
`

export {NoticeList, NoticeItem, ModifyBtn, DeleteBtn, CreateBtn, PostBtn, AppWrap, Button};
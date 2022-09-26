import React from "react";
import {
    Overlay,
    ModalWrap,
    CloseButton,
    Contents,
    Button,
} from "./Modal.style";
import AmdinNoticeCreate from "../admin_notice/AdminNoticeCreate";

function Modal({ onClose }){
    const handleClose = () => {
        onClose?.();
    }

    return(
        <Overlay>
            <ModalWrap>
                <CloseButton onClick = {handleClose}>
                    <i className="fa-solid fa-xmark"></i>
                </CloseButton>
                <Contents>
                    <AmdinNoticeCreate handleClose={handleClose}/>
                    <Button onClick={handleClose}>close</Button>
                </Contents>
            </ModalWrap>

        </Overlay>
    ) 
    

}

export default Modal;
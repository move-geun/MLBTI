import React, {useState, useRef, useEffect} from "react";
import {Container} from './Modal.style';


const Modal = ({selectedData, handleCancel, setModal}) => {

    const [data, setData] = useState(selectedData);
    const modalRef = useRef<HTMLDivElement>(null);
    // useEffect(() => {
    //     // 이벤트 핸들러 함수
    //     const handler = () => {
    //         // mousedown 이벤트가 발생한 영역이 모달창이 아닐 때, 모달창 제거 처리
    //         if (modalRef.current && !modalRef.current.contains(event.target)) {
    //             setModal(false);
    //         }
    //     };
        
    //     // 이벤트 핸들러 등록
    //     document.addEventListener('mousedown', handler);
    //     // document.addEventListener('touchstart', handler); // 모바일 대응
        
    //     return () => {
    //         // 이벤트 핸들러 해제
    //         document.removeEventListener('mousedown', handler);
    //         // document.removeEventListener('touchstart', handler); // 모바일 대응
    //     };
    // });


    const onCancel = () => {
        handleCancel();
    }
    return(
        <div>
        <Container>
            <h3> {data.title}</h3>
            <form>
                <div>{data.content}</div>
                <div>{data.date}</div>
                <div>{data.hit}</div>

            </form>
            <button onClick={onCancel}> X </button>
        </Container>

        </div>
    )

}


export default Modal;
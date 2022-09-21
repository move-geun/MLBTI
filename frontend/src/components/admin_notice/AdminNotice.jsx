import React from 'react';
import { useState } from 'react';
import Modal from './Modal';



const AdminNotice = () => {

  const obj = [
    {
      글번호 : 1, 
      제목 : '첫번째 게시글', 
      내용 : '가나초콜릿',
      등록일: '2022-10-24',
      조회수 : 159 
    },
    {
      글번호 : 2, 
      제목 : '두번째 게시글', 
      내용 : '봉추찜닭',
      등록일: '2022-12-4',
      조회수 : 90 
    },
    {
      글번호 : 3, 
      제목 : '세번째 게시글', 
      내용 : '젤리',
      등록일: '2023-1-17',
      조회수 : 890 
    },

  ]

  const [info, setInfo] = useState([]);
  const [selected, setSelected] = useState('');
  const [modalOn, setModalOn] = useState(false);


  const onDetail = (item) => {
    console.log(item.제목 , "클릭함");
    setModalOn(true);
    const selectedData = {
      id: item.글번호,
      title : item.제목,
      content : item.내용,
      date : item.등록일,
      hit : item.조회수
    };

    setSelected(selectedData);
  }

  const handleCancel = () => {
    setModalOn(false);
  }

  const handleModal = () => {
    setModalOn(prev => !prev)
  }


  return (

    <div>
       <div>공지사항</div>
       <table>
          <thead>
            <tr>
              <th>글번호</th>
              <th>제목</th>
              <th>등록일</th>
              <th>조회수</th>
            </tr>
          </thead>
          <tbody>
              {
                obj.map(item => {
                  return (
                    <tr onClick={() => {onDetail(item)}}>
                    <td>{item.글번호}</td>
                    <td>{item.제목}</td>
                    <td>{item.등록일}</td>
                    <td>{item.조회수}</td>
                    </tr>
                  )
                })
              }
          </tbody>
       </table>
       <button> 글 작성하기</button>
       {modalOn && <Modal selectedData={selected} handleCancel = {handleCancel} setModal ={handleModal}/>}
       
    </div>
  )
} 

export default AdminNotice;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Report = ({ idx, title, content, lineuse, longlineuse, chooseuse, morechooseuse,retime,time }) => {
  const navigate = useNavigate();

  const moveToUpdate = () => {
    navigate('/update/' + idx);
  };

  const deleteReport = async () => {
    if (window.confirm('게시글을 삭제하시겠습니까?')) {
      await axios.delete(`//localhost:8080/report/${idx}`).then((res) => {
        alert('삭제되었습니다.');
        navigate('/report');
      });
    }
  };

  const moveToList = () => {
    navigate('/report');
  };

  return (
  <div>
    <div>
      <h2>{title}</h2>
      <hr />
      <p>{content}</p>
      <p>{lineuse}</p>
      <p>{longlineuse}</p>
      <p>{chooseuse}</p>
      <p>{morechooseuse}</p>
      <p>{retime}</p>
      <p>{time}</p>
    </div>
     <div>
            <button onClick={moveToUpdate}>수정</button>
            <button onClick={deleteReport}>삭제</button>
            <button onClick={moveToList}>목록</button>
          </div>
          </div>
  );
};

export default Report;

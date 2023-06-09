/* ReportWrite.js */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ReportWrite = () => {
  const navigate = useNavigate();

  const [report, setReport] = useState({
    title: '',
    content: '',
    lineuse:'',
    longlineuse:'',
    chooseuse:'',
    morechooseuse:'',
  });

  const { title, content, lineuse, longlineuse,chooseuse,morechooseuse } = report; //비구조화 할당

  const onChange = (event) => {
    const { value, name } = event.target; //event.target에서 name과 value만 가져오기
    setReport({
      ...report,
      [name]: value,
    });
  };

  const saveReport = async () => {
    await axios.post(`//localhost:8080/report`, report).then((res) => {
      alert('등록되었습니다.');
      navigate('/report');
    });
  };

  const backToList = () => {
    navigate('/report');
  };


  return (
    <div>
    <h2>보고서 양식 등록</h2>
      <div>
        <span>보고서 양식 제목</span>
        <input type="text" name="title" value={title} onChange={onChange} />
      </div>
      <br />
      <div>
        <span>보고서 양식 설명</span>
        <textarea
          name="content"
          cols="30"
          rows="10"
          value={content}
          onChange={onChange}
        ></textarea>
      </div>
      <br />
      <div>
          <h2>보고서 양식 미리보기</h2>
              <span>입력필드(한줄)</span>
                  <input name="lineuse" type='text' placeholder='입력필드(한줄)' onChange={onChange}/>
              <br />
              <br />
              <span>입력필드(여러줄)</span>
                  <textarea Name="longlineuse" placeholder='입력필드(여러줄)'  cols="30" rows="10"onChange={onChange}></textarea>
              <br />
              <br />
              <br />

              <span>입력필드(단일선택)</span>
                  <input type="radio" name="chooseuse" value="1" onChange={onChange}/>옵션1
                  <input type="radio" name="chooseuse" value="2" onChange={onChange}/>옵션2
                  <input type="radio" name="chooseuse" value="3" onChange={onChange}/>옵션3

              <br />
              <span>입력필드(다중선택)</span>
                  <input type="checkbox" name="morechooseuse" value="1"  onChange={onChange}/> 옵션1
                  <input type="checkbox" name="morechooseuse" value="2" onChange={onChange}/> 옵션2
                  <input type="checkbox" name="morechooseuse" value="3" onChange={onChange}/> 옵션3
          <br />
      <div>
        <button onClick={saveReport}>저장</button>
        <button onClick={backToList}>취소</button>
      </div>
    </div>
    </div>

  );
};

export default ReportWrite;
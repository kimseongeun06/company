/* ReportUpdate.js */
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const ReportUpdate = () => {
  const navigate = useNavigate();
  const { idx } = useParams(); // /update/:idx와 동일한 변수명으로 데이터를 꺼낼 수 있습니다.
  const [report, setReport] = useState({
    idx: 0,
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

  const getReport = async () => {
    const resp = await (await axios.get(`//localhost:8080/report/${idx}`)).data;
    setReport(resp.data);
  };

  const updateReport = async () => {
    await axios.patch(`//localhost:8080/report`, report).then((res) => {
      alert('수정되었습니다.');
      navigate('/report/' + idx);
    });
  };

  const backToDetail = () => {
    navigate('/report/' + idx);
  };

  useEffect(() => {
    getReport();
  }, []);

  return (
    <div>
      <div>
        <span>제목</span>
        <input type="text" name="title" value={title} onChange={onChange} />
      </div>
      <br />
      <br />
      <div>
        <span>내용</span>
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
                        <input name="lineuse" type='text' value={lineuse} onChange={onChange}/>
                    <br />
                    <br />
                    <span>입력필드(여러줄)</span>
                        <textarea Name="longlineuse" value={longlineuse}  cols="30" rows="10" onChange={onChange}></textarea>
                    <br />
                    <br />
                    <br />

                    <span>입력필드(단일선택)</span><p>{chooseuse}</p>
                        <input type="radio" name="chooseuse" value="1" onChange={onChange}/>옵션1
                        <input type="radio" name="chooseuse" value="2" onChange={onChange}/>옵션2
                        <input type="radio" name="chooseuse" value="3" onChange={onChange}/>옵션3

                    <br />
                    <span>입력필드(다중선택)</span><p>{morechooseuse}</p>
                        <input type="checkbox" name="morechooseuse" value="1"  onChange={onChange}/> 옵션1
                        <input type="checkbox" name="morechooseuse" value="2" onChange={onChange}/> 옵션2
                        <input type="checkbox" name="morechooseuse" value="3" onChange={onChange}/> 옵션3

                <br />
             </div>
            <div>
        <button onClick={updateReport}>수정</button>
        <button onClick={backToDetail}>취소</button>
      </div>
    </div>
  );
};

export default ReportUpdate;
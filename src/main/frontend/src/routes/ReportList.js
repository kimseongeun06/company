import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";

const ReportList = () => {
const navigate = useNavigate();
  const [reportList, setReportList] = useState([]);

  const getReportList = async () => {
    const resp = await (await axios.get('//localhost:8080/report')).data; // 2) 게시글 목록 데이터에 할당
    setReportList(resp.data); // 3) reportList 변수에 할당

    const pngn = resp.pagination;
    console.log(pngn);
  };

    const moveToWrite = () => {
      navigate('/write');
    };

  useEffect(() => {
    getReportList(); // 1) 게시글 목록 조회 함수 호출
  }, []);

  return (
    <div>
      <ul>
        {reportList.map((report) => (
          // 4) map 함수로 데이터 출력
          <li key={report.idx}>
            <Link to={`/report/${report.idx}`}>{report.title}</Link>
          </li>
        ))}
      </ul>
      <div>
              <button onClick={moveToWrite}>글쓰기</button>
            </div>
    </div>
  );
};

export default ReportList;
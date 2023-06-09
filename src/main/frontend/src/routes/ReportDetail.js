/* ReportDetail.js */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Report from '../components/Report';

const ReportDetail = () => {
  const { idx } = useParams(); // /report/:idx와 동일한 변수명으로 데이터를 꺼낼 수 있습니다.
  const [loading, setLoading] = useState(true);
  const [report, setReport] = useState({});
  const getReport = async () => {
    const resp = await (await axios.get(`//localhost:8080/report/${idx}`)).data;
    setReport(resp.data);
    setLoading(false);
  };

  useEffect(() => {
    getReport();
  }, []);

  return (
    <div>
      {loading ? (
        <h2>loading...</h2>
      ) : (
        <Report
          idx={report.idx}
          title={report.title}
          content={report.content}
          lineuse={report.lineuse}
          longlineuse={report.longlineuse}
          chooseuse={report.chooseuse}
          morechooseuse={report.morechooseuse}
          retime={report.retime}
          time={report.time}
        />
      )}
    </div>
  );
};

export default ReportDetail;


import {Route, Routes} from "react-router-dom";
import ReportList from "./routes/ReportList";
import Home from "./routes/Home";
import React from "react";
import ReportDetail from "./routes/ReportDetail";
import ReportWrite from './routes/ReportWrite';
import ReportUpdate from "./routes/ReportUpdate"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/report" element={<ReportList/>}/>
      <Route path="/report/:idx" element={<ReportDetail/>}/>
      <Route path="/write" element={<ReportWrite />} />
      <Route path="/update/:idx" element={<ReportUpdate />} />
    </Routes>
  );
}

export default App;
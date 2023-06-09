import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
  return (
  <div className = "header">
    <header>
      <Link to="/">홈</Link>
      &nbsp;&nbsp; | &nbsp;&nbsp;
      <Link to="/report">게시판</Link>
      <hr/>
    </header>
   </div>

  );
};

export default Header;
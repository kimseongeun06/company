import React from 'react';
import '../App.css';

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <div className="logo">
        <h3>입력필드 편집</h3>
      </div>
      <div className="menu">
        <h5>필드 정보</h5>
        <h5>필드 이름</h5>
        <input className="field-name" type='text' placeholder='입력필드'/>
        <h5>필드 설명</h5>
        <textarea className="field-explain" placeholder='필드 설명'></textarea>
        <h5>필드 타입</h5>
        <select>
            <option key="1" value="banana">입력필드(한줄)</option>
            <option key="2" value="apple">입력필드(여러줄)</option>
            <option key="3" value="orange">입력필드(단일선택)</option>
            <option key="4" value="orange">입력필드(다중선택0</option>
        </select>
      </div>
    </div>
  );
}

export default Sidebar;

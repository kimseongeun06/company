import { useNavigate } from 'react-router-dom';
import React from 'react';

function Preview() {
  return (
  <div className='Preview'>
    <h2>보고서 양식 미리보기</h2>
        <h5>입력필드(한줄)</h5>
            <input className="oneline-input" type='text' placeholder='입력필드(한줄)'/>
        <h5>입력필드(여러줄)</h5>
            <textarea className="longline-input" placeholder='입력필드(여러줄)'></textarea>
        <h5>입력필드(단일선택)</h5>
            <input type="radio" name="test" value="1"/>옵션1
            <input type="radio" name="test" value="2"/>옵션2
            <input type="radio" name="test" value="3"/>옵션3
        <h5>입력필드(다중선택)</h5>
            <input type="checkbox" name="test" value="1" /> 옵션1
            <input type="checkbox" name="test" value="2" /> 옵션2
            <input type="checkbox" name="test" value="3" /> 옵션3
    </div>
  )
}
export default Preview
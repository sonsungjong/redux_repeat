import { useState } from 'react'
import styles from './App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { 감소, 더하기, 증가 } from './store/slices/countSlice';
import { 메모비우기, 메모삭제, 메모추가 } from './store/slices/memoSlice';

export default function App() {
  // 리덕스의 변수는 useSelector
  // 리덕스의 함수(액션)는 useDispatch
  const count = useSelector((state)=>{return state.count});
  // count == {value:0}
  const dispatch = useDispatch();   // dispatch를 통해서 recuders에 있는 함수들을 사용
  // dispatch(증가())
  // dispatch(더하기(3))
  const [inputValue, setInputValue] = useState('');   // input내용을 보관
  const memo = useSelector((state)=>{return state.memo});   // [] === memo

  function hAddMemo(){
    console.log('메모 추가!');
    // inputValue에 적힌 값을 가져와서
    // dispatch의 메모추가 함수에 넘긴다
    dispatch(메모추가(inputValue));
    setInputValue('');      // 메모에 추가한다음 입력내용은 비운다
  }
  
  return (
    <div className={styles.App}>
      <h3>{count.value}</h3>
      <button onClick={()=>{ dispatch(증가()) }}>+1</button>
      <button onClick={()=>{dispatch(감소())}}>-1</button>
      <button onClick={()=>{dispatch(더하기(3))}}>더하기</button>

      <br/>
      {/* 리액트에서 input 을 사용할땐 value, onChange */}
      <input value={inputValue} onChange={(event)=>{setInputValue(event.target.value)}}/>
      <button onClick={hAddMemo}>메모추가</button>
      <button onClick={()=>{dispatch(메모비우기())}}>비우기</button>

      {/* 추가한 메모 내용은 밑에서 확인 (배열이니깐 map으로 생성) */}
      <ul>
        {
          memo.map((item, index)=>{
            return(
              <li key={index}>
                {item}{` `}
                <button onClick={()=>{dispatch(메모삭제(index))}}>삭제</button>
              </li>
            )
          })
        }
      </ul>
      
    </div>
  )
}


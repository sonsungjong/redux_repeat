import { useState } from 'react'
import styles from './App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { 감소, 더하기, 증가 } from './store/slices/countSlice';

export default function App() {
  // 리덕스의 변수는 useSelector
  // 리덕스의 함수(액션)는 useDispatch
  const count = useSelector((state)=>{return state.count});
  // count == {value:0}
  const dispatch = useDispatch();   // dispatch를 통해서 recuders에 있는 함수들을 사용
  // dispatch(증가())
  // dispatch(더하기(3))
  
  return (
    <div className={styles.App}>
      <h3>{count.value}</h3>
      <button onClick={()=>{ dispatch(증가()) }}>+1</button>
      <button onClick={()=>{dispatch(감소())}}>-1</button>
      <button onClick={()=>{dispatch(더하기(3))}}>더하기</button>
    </div>
  )
}


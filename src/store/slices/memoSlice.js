// createSlice
// []

import { createSlice } from "@reduxjs/toolkit";


const memoSlice = createSlice({
    name:'memoSlice',
    initialState:[],
    reducers:{
        // 메모추가, 메모삭제, 메모비우기
        메모추가(state, action){
            // action.payload 에 메모에 추가할 문자열
            // state === []
            state.push(action.payload);     // 배열에 추가
        },
        메모삭제(state, action){
            // action.payload에 방번호(index)를 넘겨주게 할 것
            // 배열.splice(방번호, 개수)
            state.splice(action.payload, 1);        // 방번호부터 시작해서 1개 제거
        },
        메모비우기(state, action){
            state.splice(0, state.length);          // 처음부터 끝까지 모두 삭제
        }
    },
    extraReducers:(builder)=>{
        // 비동기작업은 여기로

    }
});

// 바깥에서 사용할 함수 내보낸다 {메모추가, 메모삭제, 메모비우기}
export const {메모추가, 메모삭제, 메모비우기} = memoSlice.actions;
export default memoSlice.reducer;       // 슬라이스의 리듀서 내보낸다
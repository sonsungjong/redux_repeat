// createSlice
// name, initialState, reducers, extraReducers

import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
    name:'countSlice',          // 고유한이름(다른 슬라이스랑 곂치지않게)
    initialState: {value:0},        // 처음에 state에 넣어놓을 값
    reducers:{
        // 증가, 감소, 더하기
        증가(state, action){
            state.value += 1;       // state 에는 {value:0} 가 담겨있다
        },
        감소(state, action){
            state.value -= 1;
        },
        더하기(state, action){
            // action.payload 에 더할 숫자가 들어올 것이다
            state.value += Number(action.payload);
        },
    },
});

// 다른 컴포넌트에 증가, 감소, 더하기를 제공
export const {증가, 감소, 더하기} = countSlice.actions;
export default countSlice.reducer;  // 슬라이스 안에 리듀스를 내보낸다
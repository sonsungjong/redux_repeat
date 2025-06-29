
// createSlice
// name, initialState, reducer, extraReducer

import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
    name:'countSlice',          // 고유한이름(다른 슬라이스랑 곂치지않게)
    initialState: {value:0},        // 처음에 state에 넣어놓을 값
    reducers,
});
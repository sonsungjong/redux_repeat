// configureStore()

import { configureStore } from "@reduxjs/toolkit";
import countReducer from './slices/countSlice.js';  
// countSlice.js에서 export default로 내보낸 항목을 countReducer 라는 이름으로 사용
import memoReducer from './slices/memoSlice.js';

// 사용할 슬라이스들을 추가
// 이름: 슬라이스이름,
const store = configureStore({
    reducer:{
        count:countReducer,         // 바깥에서 count라는 키이름으로 countSlice 사용
        memo:memoReducer,           // 바깥에서 memo라는 키이름으로 사용
    }
})

// store를 바깥으로 내보낸다
export default store;           // App컴포넌트를 <Provider> 컴포넌트로 감싸서 store를 적용

/*
// index.js, main.js
    <Provider store={store}>
        <App />
    </Provider>
*/
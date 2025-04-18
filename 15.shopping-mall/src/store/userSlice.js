import { configureStore, createSlice } from '@reduxjs/toolkit';

/*
// 1. createSlice를 만든다
let user = createSlice({
    name : 'user',
    initialState : 'Kim',
    reducers : {
        changeName(state) {
            return 'jiwon ' + state
        }
    }
})
export let {changeName} = user.actions
*/

/*
// 키 값이 객체일 때(arry일 때)
let user = createSlice({
    name : 'user',
    initialState : {name:'kim', age: 23},
    reducers : {
        changeName(state) {
            return {name:'park', age: 25}
        }
    }
})
export let {changeName} = user.actions
*/

//직접 변경 가능 => 직접 변경할떄는 return을 뺴줘야 함
let user = createSlice({
    name : 'user',
    initialState : {name:'kim', age: 23},
    reducers : {
        changeName(state) { //state는 기존 값을 받아옴
             state.name = 'park'
        },
        ageUpdate(state) {
             state.age += 1
        }
    }
})
export let {changeName, ageUpdate} = user.actions
export default user;
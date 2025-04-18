import { configureStore, createSlice } from '@reduxjs/toolkit';

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
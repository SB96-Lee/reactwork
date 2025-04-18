import { configureStore, createSlice } from '@reduxjs/toolkit';
import user from './userSlice'


let stock = createSlice({
    name : 'stock',
    initialState : [7, 15, 8]
})

let cart = createSlice({
    name : 'cart',
    initialState : [
     {id: 1, name: 'doggy T-shirt', count: 2},
     {id: 2, name: 'striped shirt', count: 4}, 
     {id: 3, name: 'black pants', count: 5} 
    ],
    reducers : {
        countUp(state, action) {
            state[action.payload].count +=1;
        },
        addItem(state, action) {
            let p = state.find(item => item.id == action.payload.id)
            if(p) {
                p.count++;
            } else {
                state.push(action.payload)
            }
        }
    }
})
export let {countUp, addItem} = cart.actions

export default configureStore({
    reducer : {
        // 2. 1번에 만든 createSlice를 등록
        //    임의변수 : user.reducer
        user : user.reducer,
        stock : stock.reducer,
        cart : cart.reducer
    }
})
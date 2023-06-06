import { configureStore } from '@reduxjs/toolkit'
// import { combineReducers } from 'redux'

const reducer = (state=0, action)=>{
    switch(action.type){
        case 'Increment' : return state+1;
        case 'Decrement' : return state-1;
        default: return state;
    }
}
// console.log(reducer)
export const Store = configureStore({reducer});
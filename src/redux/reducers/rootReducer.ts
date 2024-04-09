/* eslint-disable prettier/prettier */
import {combineReducers} from 'redux';
import todoReducer from './todoReducer';
const rootReducer = combineReducers({todoReducer: todoReducer});
export default rootReducer;

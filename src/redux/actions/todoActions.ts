/* eslint-disable prettier/prettier */

/* eslint-disable prettier/prettier */
import {ADD_TODO, REMOVE_TODO} from './actionTypes';

export const AddTodo = (todo: string): any => {
  return {
    type: ADD_TODO,
    payload: todo,
  };
};

export const RemoveTodo = (id: string): any => {
  return {
    type: REMOVE_TODO,
    payload: id,
  };
};

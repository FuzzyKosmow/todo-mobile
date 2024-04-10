/* eslint-disable prettier/prettier */
import {ADD_TODO, REMOVE_TODO, UPDATE_TODO} from './actionTypes';

export const AddTodo = (todo: string): any => {
  return {
    type: ADD_TODO,
    payload: todo,
  };
};

export const UpdateTodo = (id: string, todo: string): any => {
  return {
    type: UPDATE_TODO,
    payload: {id, todo},
  };
};
export const RemoveTodo = (id: string): any => {
  return {
    type: REMOVE_TODO,
    payload: id,
  };
};

export const ToggleTodo = (id: string): any => {
  return {
    type: 'TOGGLE_TODO',
    payload: id,
  };
};

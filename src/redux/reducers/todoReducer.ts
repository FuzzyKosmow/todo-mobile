/* eslint-disable prettier/prettier */
import {Action, ITodo} from '../../../types';
import {ADD_TODO, REMOVE_TODO, UPDATE_TODO} from '../actions/actionTypes';

let curId = 0;
interface TodoState {
  todos: ITodo[];
}
const INITIAL_STATE: TodoState = {
  todos: [],
};
const todoReducer = (state = INITIAL_STATE, action: Action): TodoState => {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [
          ...state.todos,
          {
            id: curId++,
            text: action.payload,
          },
        ],
      };
    case REMOVE_TODO:
      return {
        todos: state.todos.filter(
          todo => todo.id.toString() !== action.payload,
        ),
      };
    case UPDATE_TODO:
      return {
        todos: state.todos.map(todo =>
          todo.id.toString() === action.payload.id
            ? {...todo, text: action.payload.todo}
            : todo,
        ),
      };
    default:
      return state;
  }
};

export default todoReducer;

/* eslint-disable prettier/prettier */
import {StyleSheet, Dimensions, ViewStyle, TextStyle} from 'react-native';

const {width} = Dimensions.get('window');

interface TodoStyles {
  main: ViewStyle;
  mainInput: ViewStyle;
  todoList: ViewStyle;
  todoView: ViewStyle;
  removeTodo: ViewStyle;
  todoText: TextStyle;
  removeText: TextStyle;
  editText: TextStyle;
  todoItemText: TextStyle;
  editTodoButton: ViewStyle; // Added editTodo type
  editInput: TextStyle; // Added editInput type
}

const styles: TodoStyles = StyleSheet.create({
  main: {alignItems: 'center'},
  mainInput: {
    borderWidth: 1,
    height: 55,
    width: width * 0.9,
    padding: 10,
    margin: 10,
    alignItems: 'center',
    borderRadius: 9,
  },
  todoList: {
    borderWidth: 1,
    borderRadius: 10,
    width: width * 0.5,
    height: 40,
    justifyContent: 'center',
    padding: 10,
  },
  todoView: {flex: 1, flexDirection: 'row', margin: 10, padding: 10},

  removeTodo: {
    backgroundColor: 'hsl(1, 60%, 70%)',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 4,
    width: width * 0.1,
    height: 'auto',
  },
  editTodoButton: {
    backgroundColor: 'hsl(120, 60%, 70%)',
    color: 'hsl(120, 60%, 30%)',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 4,
    width: width * 0.1,
    height: 'auto',
  },

  todoText: {
    alignSelf: 'stretch',
    paddingLeft: 40,
    fontWeight: 'bold',
    fontSize: 18,
    color: 'blue',
  },
  removeText: {
    color: 'white',
  },
  editText: {
    color: 'hsl(120, 60%, 30%)',
  },
  todoItemText: {
    fontSize: 16,
    color: 'black',
  },

  editInput: {
    color: 'black',
  },
});

export {styles};

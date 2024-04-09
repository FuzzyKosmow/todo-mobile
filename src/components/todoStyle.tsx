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
  todoItemText: TextStyle;
  editTodo: ViewStyle; // Added editTodo type
  editInput: ViewStyle; // Added editInput type
  editButton: ViewStyle; // Added editButton type
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
    width: width * 0.8,
    height: 40,
    justifyContent: 'center',
    padding: 10,
  },
  todoView: {flex: 1, flexDirection: 'row', margin: 10, padding: 5},

  removeTodo: {
    backgroundColor: 'red',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 4,
    width: 30,
    height: 30,
  },

  todoText: {
    alignSelf: 'stretch',
    paddingLeft: 40,
    fontWeight: 'bold',
    fontSize: 18,
    color: 'blue',
  },

  todoItemText: {
    fontSize: 16,
    color: 'black',
  },

  editTodo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },

  editInput: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 5,
    flex: 1,
  },

  editButton: {
    backgroundColor: 'green',
    borderRadius: 5,
    alignItems: 'center',
    paddingHorizontal: 5,
  },
});

export {styles};

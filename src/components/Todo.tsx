/* eslint-disable prettier/prettier */
import React, {useState, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  AddTodo,
  RemoveTodo,
  ToggleTodo,
  UpdateTodo,
} from '../redux/actions/todoActions';
import {styles} from './todoStyle';
import {
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
  Animated,
  Alert,
} from 'react-native';
import {ITodo} from '../../types';

const Todo: React.FC = () => {
  const [todoValue, setTodoValue] = useState<string>('');
  const dispatch = useDispatch();
  const todos: ITodo[] = useSelector(
    (state: any) => state.todoReducer.todos || [],
  );
  const animation = useRef(new Animated.Value(0)).current;
  const [editingTodoId, setEditingTodoId] = useState<string | null>(null);
  const [newText, setNewText] = useState<string>('');
  const addTodo = () => {
    dispatch(AddTodo(todoValue));
    setTodoValue('');
  };

  const removeTodo = (itemId: string) => {
    Alert.alert('Delete Todo', 'Are you sure you want to delete this todo?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => dispatch(RemoveTodo(itemId)),
      },
    ]);
  };

  const renderTodoList = () => {
    return (
      <FlatList
        keyExtractor={item => item.id.toString()}
        data={todos}
        renderItem={({item}) =>
          editingTodoId !== null && editingTodoId === item.id.toString() ? (
            <>
              <View style={styles.todoList}>
                <TextInput
                  style={{
                    color: 'black',
                  }}
                  onChangeText={text => setNewText(text)}
                  value={newText}
                />
              </View>
              <TouchableOpacity>
                <Button
                  title="Save"
                  onPress={() => editTodo(item.id.toString(), newText)}
                />
              </TouchableOpacity>
            </>
          ) : (
            <Animated.View
              style={[
                styles.todoView,
                {
                  transform: [
                    {
                      translateX: animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, 200],
                      }),
                    },
                  ],
                },
              ]}>
              <View style={styles.todoList}>
                <TouchableOpacity
                  onPress={() => dispatch(ToggleTodo(item.id.toString()))}>
                  <Text style={styles.todoItemText}>
                    {item.completed ? '✅' : '⬜'} {item.text}
                  </Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={styles.removeTodo}
                onPress={() => removeTodo(item.id.toString())}>
                <Text style={{color: styles.removeText.color}}>X</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.editTodoButton}
                onPress={() => {
                  setEditingTodoId(item.id.toString());
                  setNewText(item.text);
                }}>
                <Text style={{color: styles.editText.color}}>Edit</Text>
              </TouchableOpacity>
            </Animated.View>
          )
        }
      />
    );
  };

  const editTodo = (itemId: string, newText: string) => {
    dispatch(UpdateTodo(itemId, newText));
    setEditingTodoId(null);
    setNewText('');
  };
  return (
    <View style={styles.main}>
      <TextInput
        style={styles.mainInput}
        onChangeText={setTodoValue}
        placeholder={'Add your todo here...'}
        value={todoValue}
      />
      <Button title="Add Todo" onPress={addTodo} />
      <Text style={styles.todoText}>List of Todos :</Text>
      {renderTodoList()}
    </View>
  );
};

export default Todo;

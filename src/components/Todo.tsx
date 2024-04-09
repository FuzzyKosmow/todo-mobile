/* eslint-disable prettier/prettier */
import React, {useState, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AddTodo, RemoveTodo} from '../redux/actions/todoActions';
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
        keyExtractor={(item: ITodo) => item.id.toString()}
        data={todos}
        renderItem={({item}: {item: ITodo}) => (
          <Animated.View
            style={[
              styles.todoView,
              {
                transform: [
                  {
                    translateX: animation.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, 200], // Change this value for different animation effect
                    }),
                  },
                ],
              },
            ]}>
            <View style={styles.todoList}>
              <Text style={styles.todoItemText}>{item.text}</Text>
            </View>
            <TouchableOpacity
              style={styles.removeTodo}
              onPress={() => removeTodo(item.id.toString())}>
              <Text> X </Text>
            </TouchableOpacity>
          </Animated.View>
        )}
      />
    );
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

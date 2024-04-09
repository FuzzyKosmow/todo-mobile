import React from 'react';
import {Provider} from 'react-redux';
import logger from 'redux-logger';
import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './src/redux/reducers/rootReducer';
import Todo from './src/components/Todo';
const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});
const App = () => (
  <Provider store={store}>
    <Todo />
  </Provider>
);
export default App;

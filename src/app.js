import React from 'react';
import ReactDom from 'react-dom';
import redux from 'redux';
import {Provider} from 'react-redux';
import TodoApp from './containers/todo_app.js';
import store from './store/store.js';

ReactDom.render(
  <Provider store={store}>
    <TodoApp/>
  </Provider>
  ,document.getElementById('todo'));

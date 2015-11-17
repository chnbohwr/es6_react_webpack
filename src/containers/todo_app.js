import React from 'react';
import {connect} from 'react-redux';
import AddTodo from '../components/AddTodo.jsx';
import TodoList from '../components/TodoList.jsx'
import * as TodoAction from '../action/action.js';

 class TodoApp extends React.Component {
  render(){
    var {dispatch,todos} = this.props;
    return(
      <div>
        <AddTodo onAddClick = {function(text){
            dispatch(TodoAction.addTodo(text));
        }} />
        <TodoList todos={todos}/>
      </div>
    );
  }
}

function select(state){
  return {
    todos:state.todoReducer
  };
}

export default connect(select)(TodoApp);

import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import AddTodo from '../components/AddTodo.jsx';
import TodoList from '../components/TodoList.jsx'
import * as TodoAction from '../action/action.js';


function mapStateToProps(state) {
  return { todos: state.todoReducer };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(TodoAction.actionCreator, dispatch) };
}


class TodoApp extends React.Component {
  render(){
    var {actions,todos} = this.props;
    return(
      <div>
        <AddTodo onAddClick = {actions.addTodo} />
        <TodoList todos={todos}/>
      </div>
    );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoApp)

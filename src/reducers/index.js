/**
 * 把所有的reducer做結合的動作，這邊去引用到redux裡面的combineReducers來做結合
 * https://github.com/happypoulp/redux-tutorial/blob/master/06_combine-reducers.js
 * 輸出combine之後的rootReducer
 */
import { combineReducers } from 'redux';
import todoReducer from './todo_reducer.js';
const rootReducer = combineReducers({todoReducer});
export default rootReducer;

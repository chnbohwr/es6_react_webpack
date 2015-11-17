/**
 * 把combine之後的reducer做成store，然後輸出。
 */
import { createStore } from 'redux'
import reducer from '../reducers';
var store = createStore(reducer);
export default store;

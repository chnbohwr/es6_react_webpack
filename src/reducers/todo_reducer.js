import {VISIBILITYFILTERS, TYPES} from '../action/action.js';
import redux from 'redux';
//製作一開始初始的todos陣列
var faketodos = [{text:'buy a pen',completed:false}];
/**
 * todos的reducer負責todos的更新
 * @param  {Array} state  =             faketodos 如果沒有給予初始執就會先把faketodos放進去當作初始值
 * @param  {Object} action 傳入的action物件
 * @return {Array}        回傳state，必須注意這邊state要回傳的記憶體位置要是新的。
 */
export default function todos(state = faketodos, action) {
  switch (action.type) {
   case TYPES.ADD_TODO:
     //這是 ES5的語法，如果要用es6的語法可以寫成 return[...state,{text:action.text,completed:false}];
     var newState = [].concat(state,[{text:action.text,completed:false}]);
     return newState;
   case TYPES.COMPLETE_TODO:
     //完成一個 備忘錄的時候要把它的completed換成true
     return [
       ...state.slice(0, action.index),
       Object.assign({}, state[action.index], {
         completed: true
       }),
       ...state.slice(action.index + 1)
     ]
   default:
     return state
 }
}

/**
 * 了解redux的action如何製作
 * https://github.com/happypoulp/redux-tutorial/blob/master/01_simple-action-creator.js
 * 小提醒:action一定要有type可供reducer分類。
 * 認識完action之後可以認識reducer跟store
 */

/**
製作action的類型，這邊做成常數提供給其他的module呼叫
ADD_TODO: 新增備忘錄
COMPLETE_TODO: 完成備忘錄
**/
export const TYPES = {
    ADD_TODO: 'ADD_TODO',
    COMPLETE_TODO: 'COMPLETE_TODO'
};

/**
 * 新增備忘錄的action
 * @param  {String} text 備忘錄的文字
 * @return {Object}      action物件
 */
export var addTodo = (text) => {
    if (text) {
        return {
            type: TYPES.ADD_TODO,
            text: text
        };
    } else {
        return;
    }

}

/**
 * 完成備忘錄
 * TODO 這邊我還沒做完
 * @param  {int} index 備忘錄所在陣列的排序號碼
 * @return {Object}       action物件
 */
export var completeTodo = (index) => {
    return {
        type: TYPES.COMPLETE_TODO,
        index: index
    };
}

export var actionCreator={addTodo,completeTodo};
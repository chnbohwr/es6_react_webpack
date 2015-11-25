import {addTodo,TYPES} from '../../src/action/action.js';

describe('action for app',()=>{
  it('addtodo has item input',()=>{
    var text = 'a';
    var resultItem = {
      type:TYPES.ADD_TODO,
      text:text
    };
    expect(resultItem).deep.to.equal(addTodo(text));
  })
  it('addtodo has no item input',()=>{

    var resultItem = undefined;
    expect(resultItem).to.equal(addTodo());
  })
});

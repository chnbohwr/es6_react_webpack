import Hello from './Hello.jsx';
import {createStore, combineReducers} from 'redux';

var userReducer = function (state = {}, action) {
    console.log('userReducer was called with state', state, 'and action', action)

    switch (action.type) {
        case 'SET_NAME':
            return Object.assign(state,{
                name:action.name
            });
        default:
            return state;
    }
}

var itemReducer = (state={},action)=>{
    console.log('itemsReducer was called with state', state, 'and action', action)
    return state;
};

var reducer = combineReducers({
    user:userReducer,
    items:itemReducer
});

var store = createStore(reducer);

store.subscribe(()=>{
    console.log('store has been updated,',store.getState());
});

var setNameACtionCreator = (name)=>{
    return{
        type:'SET_NAME',
        name:name
    };
};

store.dispatch(setNameACtionCreator('jack'));
store.dispatch(setNameACtionCreator('mick'));
store.dispatch(setNameACtionCreator('Dell'));


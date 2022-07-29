import { createStore } from 'redux';

const INITIAL_STATE ={
    data: [
        'Livro',
        'Notebook'
    ],
};

function items(state = INITIAL_STATE, action){
    switch (action.type) {
        case 'ADD_ITEM':
           return {...state, data: [ ...state.data, action.name] };
           default:
            return state;
    }
}

const store = createStore(items);

export default store;
import { createStore } from 'redux';

const reducer = (state = 0, action) => {

    switch (action.type) {
        case 'INC':
            return state + 1;
        case 'DEC':
            return state - 1;
        case 'RND':
            return state + action.payload;
        default:
            return state;
    }
};

const store = createStore(reducer);

const incr = () => store.dispatch({type: 'INC'});
const decr = () =>  store.dispatch({type: 'DEC'});
const rnd = () =>  {
    const payload = Math.floor(Math.random() * 10 + 1);

    store.dispatch({
        type: 'RND',
        payload
    });
};

document
    .getElementById('inc')
    .addEventListener('click', incr);

document
    .getElementById('dec')
    .addEventListener('click', decr);

document
    .getElementById('rnd')
    .addEventListener('click', rnd);

const update = () => {
    document
        .getElementById('counter')
        .innerHTML = store.getState()
    ;
};

store.subscribe(update);

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

const inc = () => ({type: 'INC'});

const dec = () => ({type: 'DEC'});

const rnd = (payload) => {
    return {
        type: 'RND',
        payload
    };
};

const doIncr = () => store.dispatch(inc());
const doDecr = () => store.dispatch(dec());

const payload = Math.floor(Math.random() * 10 + 1);
const doRnd = () => store.dispatch(rnd(payload));

document
    .getElementById('inc')
    .addEventListener('click', doIncr);

document
    .getElementById('dec')
    .addEventListener('click', doDecr);

document
    .getElementById('rnd')
    .addEventListener('click', doRnd);

const update = () => {
    document
        .getElementById('counter')
        .innerText = store.getState()
    ;
};

store.subscribe(update);

import { createStore } from 'redux';
import reducer from './reducer';
import { inc, dec, rnd } from './actions';

const store = createStore(reducer);

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

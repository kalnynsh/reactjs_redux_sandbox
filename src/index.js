import { createStore, bindActionCreators } from 'redux';
import reducer from './reducer';
import * as actions from './actions';

const store = createStore(reducer);
const { dispatch } = store;

// inc, dec, rnd -- wrapped functions with dispatch
const {
    inc,
    dec,
    rnd
} = bindActionCreators({actions}, dispatch);

document
    .getElementById('inc')
    .addEventListener('click', inc);

document
    .getElementById('dec')
    .addEventListener('click', dec);

const payload = Math.floor(Math.random() * 10 + 1);

document
    .getElementById('rnd')
    .addEventListener('click', () => {
        rnd(payload)
    });

const update = () => {
    document
        .getElementById('counter')
        .innerText = store.getState()
    ;
};

store.subscribe(update);

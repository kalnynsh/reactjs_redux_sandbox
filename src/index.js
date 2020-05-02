import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, bindActionCreators } from 'redux';
import reducer from './reducer';
import * as actions from './actions';
import Counter from './counter';

const store = createStore(reducer);
const { dispatch } = store;

// inc, dec, rnd - wrapped functions with dispatch
const {
    inc,
    dec,
    rnd
} = bindActionCreators(actions, dispatch);

const update = () => {
    ReactDOM.render(
        <Counter
            counter={store.getState()}
            doInc={inc}
            doDec={dec}
            doRnd={() => {
                const payload = Math.floor(Math.random() * 10 + 1);
                rnd(payload);
            }}
        />,
        document.getElementById('root')
    );
};

update();

store.subscribe(update);

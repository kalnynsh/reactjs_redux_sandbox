import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

const Counter = ({ counter, inc, dec, rnd }) => {
    return (
        <div className="container jumbotron">
            <div className="row">
                <h2 id="counter">{ counter }</h2>
            </div>
            <div className="row">
                <button
                    id="inc"
                    className="btn btn-primary btn-lg mx-2"
                    onClick={inc}
                >
                    +
                </button>
                <button
                    id="dec"
                    className="btn btn-info btn-lg mr-2"
                    onClick={dec}
                >
                    -
                    </button>
                <button
                    id="rnd"
                    className="btn btn-outline-danger btn-lg"
                    onClick={rnd}
                >
                    Random
                </button>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        counter: state
    }
};

// Do by connect
// const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators(actions, dispatch);
// };

export default connect(mapStateToProps, actions)(Counter);

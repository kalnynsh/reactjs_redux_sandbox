import React from 'react';

const Counter = ({ counter, doInc, doDec, doRnd }) => {
    return (
        <div className="container jumbotron">
            <div className="row">
                <h2 id="counter">{ counter }</h2>
            </div>
            <div className="row">
                <button
                    id="inc"
                    className="btn btn-primary btn-lg mx-2"
                    onClick={doInc}
                >
                    +
                </button>
                <button
                    id="dec"
                    className="btn btn-info btn-lg mr-2"
                    onClick={doDec}
                >
                    -
                    </button>
                <button
                    id="rnd"
                    className="btn btn-outline-danger btn-lg"
                    onClick={doRnd}
                >
                    Random
                </button>
            </div>
        </div>
    );
};

export default Counter;

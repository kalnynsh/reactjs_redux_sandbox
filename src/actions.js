const inc = () => ({type: 'INC'});

const dec = () => ({type: 'DEC'});

const rnd = (payload) => {
    return {
        type: 'RND',
        payload
    };
};

export {
    inc,
    dec,
    rnd
};

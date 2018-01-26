import { types } from './action';
const { ADD_ASYN_NUMBER_SUCCESS, ADD_ASYN_NUMBER_FAIL, ADD_NUMBER } = types;

const initState = {
    auth: false,
    info: {},
    number: 0,
}

function reducer(state = initState, { payload, type }) {
    switch (type) {
        case ADD_ASYN_NUMBER_SUCCESS:
            return {...state, info: payload, auth: true}
            break;

        case ADD_ASYN_NUMBER_FAIL:
            return {...state, info: payload, auth: false}

        case ADD_NUMBER:
            return {...state, number: state.number + 1}
    }
    
    return state;
}

export default reducer;
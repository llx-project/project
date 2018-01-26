import { types } from './action';
const { ADD_ASYN_NUMBER_SUCCESS, ADD_ASYN_NUMBER_FAIL, ADD_NUMBER } = types;

const initState = {
    auth: false,
    info: {},
    number: 0,
}

function reducer(state = initState, { payload, type }) {
    switch (type) {
        // 添加会员异步成功
        case ADD_ASYN_NUMBER_SUCCESS:
            return {...state, info: payload}
            break;

        // 添加会员异步失败
        case ADD_ASYN_NUMBER_FAIL:
            return {...state, info: payload}

        // 添加会员
        case ADD_NUMBER:
            return {...state, number: state.number + 1}
    }
    
    return state;
}

export default reducer;
import * as apiUser from '../../common/api/user';
import type from '../../common/util/actionTypes'

// 设置添加用户数异步
type.defineAsynType('ADD_ASYN_NUMBER');
export const addAsynType = params => ({
    type: type.types.ADD_ASYN_NUMBER,
    payload: apiUser.addAsynType(params)
})

// 设置添加用户数
type.defineType('ADD_NUMBER');
export const addNumber = () => ({
    type: type.types.ADD_NUMBER,
})

export const types = type.types;


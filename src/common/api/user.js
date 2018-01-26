import http from '../util/http';

export function login({
    username,
    password
}) {
    return http.post('login', {
        username,
        password
    })
}

export function addAsynType() {
    return new Promise((resolve, reject) => {
        resolve({code: 0})
        // resolve({code: 2})
        // this.setTimeout(() => {
        //     resolve({a: 123})
        // }, 2000);
    })
}
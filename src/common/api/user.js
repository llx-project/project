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

export function addAsynType(resolve, reject) {
    return new Promise((re) => {
        this.setTimeout(() => {
            resolve({a: 123})
        }, 2000);
    })
}
import instance from "./axios";
export function logins(form) {
    // return instance.post('/blog/m-account/login', form)
    return instance({
        method: 'post',
        url: '/blog/m-account/login',
        data: form
    })
}
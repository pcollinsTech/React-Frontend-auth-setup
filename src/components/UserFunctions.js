import axios from 'axios';



const url = process.env.URL;

export const register = newUser => {

    console.log("REGISTER", newUser)
    return axios
    .post(`${url}api/register`, newUser, {
        headers: {'Content-Type': 'application/json'}
    })
    .then(res =>{
        console.log(res)
    })
    .catch(err => {
        console.log(err)
    })
}

export const login = user => {
    return axios
        .post(`${url}api/login`, {
        email: user.email,
        password: user.password
    }, {
        headers: {'Content-Type': 'application/json'}
    })
    .then(res =>{
        localStorage.setItem('usertoken', res.data.token)
        console.log(res)
    })
    .catch(err => {
        console.log(err)
    })
}


export const getProfile = () => {
    return axios
        .get(`${url}api/profile`, {
            headers: { Authorization: `Bearer ${localStorage.usertoken}` }
        })
        .then(res => {
            console.log(res)
            return res.data
        })
        .catch(err => {
            console.log(err)
        })
}
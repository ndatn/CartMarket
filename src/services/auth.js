import axios from 'axios'
import { AUTH_URL, DECODE_TOKEN_URL } from '../utils/request_ip'

export const loginAsync = async ({ email, password }) => {
    try {
        const response = await axios.post(`${AUTH_URL}/login`, {
            email,
            password
        })
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const registerAsync = async ({ firstName, lastName, email, password, age }) => {
    try {
        const response = await axios.post(`${AUTH_URL}/register`, {
            firstName,
            lastName,
            email,
            password,
            age
        })
        console.log(response.data)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const decodeTokenAsync = async ({ token }) => {
    try {
        const response = await axios.post(`${DECODE_TOKEN_URL}/token`, {}, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return response.data
    } catch (error) {
        console.log(error)
    }
}







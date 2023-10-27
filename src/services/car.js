import axios from 'axios'
import { REQUEST_URL } from '../utils/request_ip'

export const getCarsAsync = async () => {
    try {
        const response = await axios.get(`${REQUEST_URL}/cars`);
        return response.data
    } catch (error) {
        console.log(error)
        return error
    }
}

export const getCarByIdAsync = async (id) => {
    try {
        const response = await axios.get(`${REQUEST_URL}/cars/${id}`)
        return response.data
    } catch (error) {
        console.log(error)
        return error
    }
}
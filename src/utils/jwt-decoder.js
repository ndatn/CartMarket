import { decode as atob } from "base-64"

export const jwtDecoder = (token) => {
    const [ header, payload, signature ] = String(token).split('.')
    return {
        payload: JSON.parse(atob(payload))
    }
}


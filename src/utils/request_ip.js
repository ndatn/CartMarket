import { MODE } from "./application_mode"

export const PROTOCOL = MODE === "DEVELOPMENT" ? "http" : "https"
//thay ip 192.168.1.10  thanh IP card mang cua may
export const REQUEST_IP = MODE === "DEVELOPMENT" ? "192.168.1.10:8081" : ""

export const REQUEST_URL = `${PROTOCOL}://${REQUEST_IP}`

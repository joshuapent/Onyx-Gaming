import { sendRequest } from "./send-request";
const BASE_URL = '/api/chat';

export async function getUsers() {
    return sendRequest(`${BASE_URL}/all`)
}

export async function login(credentials) {
    return sendRequest(`${BASE_URL}/login`, "POST", credentials);
}
import { sendRequest } from "./send-request";
const BASE_URL = '/api/chat';

export async function getChat() {
    return sendRequest(`${BASE_URL}/all`)
}

export async function connectUsers(credentials) {
    return sendRequest(`${BASE_URL}/create`, "POST", users);
}

export async function disconnectUsers(credentials) {
    return sendRequest(`${BASE_URL}/delete`, "POST", users);
}
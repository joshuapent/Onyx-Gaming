import { sendRequest } from "./send-request";
const BASE_URL = '/api/chat';

export async function myChats(id) {
    return sendRequest(`${BASE_URL}/myChats/${id}`)
}

export async function aChat(chatRoom) {
    return sendRequest(`${BASE_URL}/aChat/${chatRoom}`)
}

export async function connectUsers(userData) {
    return sendRequest(`${BASE_URL}/create`, "POST", userData);
}

export async function disconnectUsers(userData) {
    return sendRequest(`${BASE_URL}/delete`, "POST", userData);
}

import { sendRequest } from "./send-request";
const BASE_URL = '/api/messages';

export async function findMessages(id) {
    return sendRequest(`${BASE_URL}/chatMsgs/${id}`)
}
export async function newMessage(msgData) {
    return sendRequest(`${BASE_URL}/create`, "POST", msgData);
}


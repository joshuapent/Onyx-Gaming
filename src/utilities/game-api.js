import { sendRequest } from "./send-request";
const BASE_URL = '/api/games';

export async function createGame(game) {
    return sendRequest(`${BASE_URL}/create`, "POST", game);
}
import { sendRequest } from "./send-request";
const BASE_URL = '/api/game';

export async function createGames(game) {
    return sendRequest(`${BASE_URL}/create`, "POST", game);
}
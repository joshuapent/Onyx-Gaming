import { sendRequest } from "./send-request";
const BASE_URL = '/api/users';

export async function signUp(userData) {
  return sendRequest(BASE_URL, "POST", userData);
}

export async function login(credentials) {
  return sendRequest(`${BASE_URL}/login`, "POST", credentials);
}

export async function checkToken() {
  return sendRequest(`${BASE_URL}/check-token`);
}

export async function getUsers() {
  return sendRequest(`${BASE_URL}/all`)
}

export async function getUser(id) {
  return sendRequest(`${BASE_URL}/user/${id}`)
}
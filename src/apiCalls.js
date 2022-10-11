import axios from "./axios";

export async function fetchBoards() {
  return axios
    .get(`members/me/boards?fields=name,url&filter=open`)
    .then((res) => res.data);
}

export async function createBoard(name) {
  return axios.post(`boards/?name=${name}`).then((res) => res.data);
}

export async function fetchLists(id) {
  return axios.get(`boards/${id}/lists?`).then((res) => res.data);
}

export async function createList(name, id) {
  return axios.post(`lists?name=${name}&idBoard=${id}`).then((res) => res.data);
}

export async function deleteList(id) {
  return axios.put(`lists/${id}/closed?value=${true}&`).then((res) => res.data);
}

export async function getCards(id) {
  return axios.get(`lists/${id}/cards?`).then((res) => res.data);
}

export async function createCard(id, name) {
  return axios.post(`cards?idList=${id}&name=${name}`).then((res) => res.data);
}

export async function deleteCard(id) {
  return axios.delete(`cards/${id}?`);
}

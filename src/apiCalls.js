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

export async function createCard(name, id) {
  return axios
    .post(`cards?idList=${id}&name=${name}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
}

export async function deleteCard(id) {
  return axios.delete(`cards/${id}?`).then((res) => res.data);
}

export async function getChecklists(id) {
  return axios.get(`cards/${id}/checklists?`).then((res) => res.data);
}

export async function createChecklist(id, name) {
  return axios
    .post(`cards/${id}/checklists?name=${name}`)
    .then((res) => res.data);
}

export async function deleteChecklist(id) {
  return axios.delete(`checklists/${id}?`).then((res) => res.data);
}

export async function getCheckItems(id) {
  return axios.get(`checklists/${id}/checkItems?`).then((res) => res.data);
}

export async function createCheckItem(name, id) {
  return axios
    .post(`checklists/${id}/checkItems?name=${name}`)
    .then((res) => res.data);
}

export async function deleteCheckItem(id, idChecklist) {
  return axios
    .delete(`checklists/${idChecklist}/checkItems/${id}?`)
    .then((res) => res.data);
}

export async function updateItemOnCheckList(id, idCard, idChecklist, value) {
  return axios
    .put(
      `cards/${idCard}/checklist/${idChecklist}/checkItem/${id}?state=${value}`
    )
    .then((res) => {
      return res.data;
    });
}

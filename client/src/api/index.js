import axios from 'axios';

const url = 'http://localhost:5000/writings';

export const fetchWritings = () => axios.get(url);

export const createWriting = (newWriting) => axios.post(url, newWriting);

export const updateWriting = (id, updatedWriting) => axios.patch(`${url}/${id}`, updatedWriting);

export const deleteWriting = (id) => axios.delete(`${url}/${id}`);
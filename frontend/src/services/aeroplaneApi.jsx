import axios from 'axios';
const API_URL = 'http://localhost:3000/api/aeroplanes';

export const getAllAeroplanes=()=>axios.get(API_URL);
export const getAeroplaneById=(id)=>axios.get(`${API_URL}/${id}`);
export const createAeroplane = (data) => axios.post(API_URL, data);
export const updateAeroplane = (id, data) => axios.put(`${API_URL}/${id}`, data);
export const deleteAeroplane = (id) => axios.delete(`${API_URL}/${id}`);

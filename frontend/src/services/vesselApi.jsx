import axios from 'axios';
const API_URL = 'http://localhost:3000/api/vessels';

export const getAllVessels=()=>axios.get(API_URL);
export const getVesselById=(id)=>axios.get(`${API_URL}/${id}`);
export const createVessel = (data) => axios.post(API_URL, data);
export const updateVessel = (id, data) => axios.put(`${API_URL}/${id}`, data);
export const deleteVessel = (id) => axios.delete(`${API_URL}/${id}`);

import axios from 'axios';
const API_URL = 'http://localhost:3000/api/customers';

export const getAllCustomers=()=>axios.get(API_URL);
export const getCustomerById=(id)=>axios.get(`${API_URL}/${id}`);
export const createCustomer = (data) => axios.post(API_URL, data);
export const updateCustomer = (id, data) => axios.put(`${API_URL}/${id}`, data);
export const deleteCustomer = (id) => axios.delete(`${API_URL}/${id}`);

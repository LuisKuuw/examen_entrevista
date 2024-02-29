import axios from "axios";

const BASE_API = import.meta.env.VITE_API_URL;

export const getDesarrolladores = async () =>{
    const response = await axios.get(`${BASE_API}/v1/all_rows`)
    return await response
}

export const getDesarroladorById = async (id) =>{
    const response = await axios.get(`${BASE_API}/v1/edit/${id}`)
    return await response
}

export const postDesarrollador = async (data) => {
    const response = await axios.post(`${BASE_API}/v1/create`, data)
    return response;
}

export const updateDesarrollador = async (data) => {
    const response = await axios.put(`${BASE_API}/v1/update/${data.DESARROLADOR_ID}`, data)
    return response;
}

export const deleteDesarrollador = async (id) => {
    const response = await axios.delete(`${BASE_API}/v1/delete/${id}`);
    return response;
}
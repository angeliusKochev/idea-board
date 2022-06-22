/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
const baseUrl =
    "https://my-json-server.typicode.com/angeliusKochev/idea-board/ideas";

const getIdeas = () => {
    return axios.get(baseUrl);
};

const createIdea = (newObject) => {
    return axios.post(baseUrl, newObject);
};

const updateIdea = (id, newObject) => {
    return axios.put(`${baseUrl}/${id}`, newObject);
};

const removeIdea = (id) => {
    return axios.delete(`${baseUrl}/${id}`);
};

export default {
    getIdeas,
    createIdea,
    updateIdea,
    removeIdea,
};

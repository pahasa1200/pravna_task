import axios from "axios";

export const instance = axios.create({
    baseURL: "http://hp-api.herokuapp.com/api/characters/",
});

export const API = {
    getAllCharacters() {
        return instance.get(``).then( res => res.data);
    },
    getCharactersByType(type) {
        return instance.get(`${type}`).then( res => res.data);
    },
    getCharactersByHouse(house) {
        return instance.get(`house/${house}`).then( res => res.data);
    },
};


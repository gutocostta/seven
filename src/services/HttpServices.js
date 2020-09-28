import axios from "axios";



const httpService = axios.create({
  baseURL: 'https://random-persons.herokuapp.com/',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});


export async function getUsers() {
    return await httpService.get('/users')
        .then((response) => {
            return response;
    })
        .catch((error) => {
            return error.response;
    })
};

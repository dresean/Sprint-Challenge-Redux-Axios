import axios from 'axios';

export const GET_SMURFS = "GET_SMURFS";
export const ADD_SMURF = "ADD_SMURF";
export const DELETE_SMURF = "DELETE_SMURF";

export const getSmurfs = () => {
  const apiUrl = 'http://localhost:3333/';
 const promise = axios.get(apiUrl);
  return {
    type: GET_SMURFS,
    payload: promise
  }
}

export const addSmurf = (smurf) => {
  const apiUrl = 'http://localhost:3333/smurfs';
  const promise = axios.post(apiUrl, smurf);
   return {
     type: ADD_SMURF,
     payload: promise
   }
}

export const deleteSmurf = (id) => {
 const apiUrl = 'http://localhost:333/smurfs';
 const promise = axios.delete(apiUrl, id);
 return {
  id: {

  }
 }
}
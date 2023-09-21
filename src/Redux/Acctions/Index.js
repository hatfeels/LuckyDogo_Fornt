import axios from "axios";

//Acctions types

export const GET_ALL_DOGS = "GET_ALL_DOGS";
export const GET_ALL_TEMPERAMENTS = "GET_ALL_TEMPERAMENTS";
export const GET_SEARCHED_DOGS = "GET_SEARCHED_DOGS";
export const FILTER_DOGS = "FILTER_DOGS"
export const SORT_DOGS = "SORT_DOGS"
export const PAGINATE = "PAGINATE"

const URL = "http://localhost:3001/";

//Acctions creators

export const getDogs = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(URL + "dogs");
      dispatch({
        type: GET_ALL_DOGS,
        payload: data,
      });
    } catch (error) {
      window.alert(error.response.data.error);
    }
  };
};

export const getTemperaments = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(URL + "temperaments");
      dispatch({
        type: GET_ALL_TEMPERAMENTS,
        payload: data,
      });
    } catch (error) {
      window.alert(error.response.data.error);
    }
  };
};

export const seachDogs = (name) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${URL}dogs/name?name=${name}`);
      dispatch({
        type: GET_SEARCHED_DOGS,
        payload: data,
      });
    } catch (error) {
      window.alert(error.response.data.error);
    }
  };
};

export const postDog = (input) => {
  return async () => {
    try {
      await axios.post(URL + "dogs", input);
      alert("Perro creado correctamente");
    } catch (error) {
      console.log(error);
      alert(error.response.data);
    }
  };
};

export const filterDogs = (filter) =>{
  return (dispatch) => {
    dispatch({
      type: FILTER_DOGS,
      payload: filter
    })
  } 
}

export const sortDogs = (order) =>{
  return (dispatch) => {
    dispatch({
      type: SORT_DOGS,
      payload: order
    })
  } 
}

import {
  FETCH_DATA,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILED
} from "./constants"
import Axios from "axios"


export const addContact = (contact) => (dispatch) => {
  Axios.post(process.env.REACT_APP_API_URL + "/contacts", contact)
    .then(() => {
      dispatch(fetchData());
    })
    .catch((err) => {
      dispatch(fetchDataFailed(err));
    });
}

export const deleteContact = (id) => (dispatch) => {
  Axios.delete(process.env.REACT_APP_API_URL + "/contacts/" + id)
    .then(() => {
      dispatch(fetchData());
    })
    .catch((err) => {
      dispatch(fetchDataFailed(err));
    });
}

export const editContact = (contact) => (dispatch) => {
  Axios.patch(process.env.REACT_APP_API_URL + "/contacts/" + contact.id, contact)
    .then(() => {
      dispatch(fetchData());
    })
    .catch((err) => {
      dispatch(fetchDataFailed(err));
    });
}

export const fetchData = () => (dispatch) => {
  dispatch({
    type: FETCH_DATA
  });
  Axios.get(process.env.REACT_APP_API_URL + "/contacts")
    .then(response => {
      const {
        data
      } = response;
      dispatch(fetchDataSuccess(data))
    })
    .catch(err => {
      dispatch(fetchDataFailed(err))
    })
}

export const fetchDataSuccess = (data) => ({
  type: FETCH_DATA_SUCCESS,
  payload: data
})

export const fetchDataFailed = (error) => ({
  type: FETCH_DATA_FAILED,
  payload: error
})
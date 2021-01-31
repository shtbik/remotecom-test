import axios from 'utils/api';

import {
  FETCH_PEOPLE_REQUEST,
  FETCH_PEOPLE_SUCCESS,
  FETCH_PEOPLE_FAILURE,
} from './actionTypes';
import { setLoadingAndQuery, setPeopleData, setError } from './actions';

// Async actions
export const fetchPeople = (query = '') => {
  return async (dispatch, getState) => {
    // TODO: split to several actions
    dispatch(setLoadingAndQuery(query));

    const params = {};
    if (query) params.name_like = query;

    try {
      const peopleRes = await axios.get('/people', {
        params,
      });
      dispatch(setPeopleData(peopleRes.data));
    } catch (error) {
      dispatch(setError());
    }
  };
};

const initialState = {
  people: [],
  query: '',
  loading: true,
  error: false,
};

// TODO: maybe add Immutable.JS
export default function peopleReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case FETCH_PEOPLE_REQUEST:
      return { ...state, query: payload, loading: true };
    case FETCH_PEOPLE_SUCCESS:
      return { ...state, people: payload, loading: false, error: false };
    case FETCH_PEOPLE_FAILURE:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
}

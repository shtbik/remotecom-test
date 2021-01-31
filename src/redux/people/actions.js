import {
  FETCH_PEOPLE_REQUEST,
  FETCH_PEOPLE_SUCCESS,
  FETCH_PEOPLE_FAILURE,
} from './actionTypes';

export const setLoadingAndQuery = (query) => ({
  type: FETCH_PEOPLE_REQUEST,
  payload: query,
});

export const setPeopleData = (people) => ({
  type: FETCH_PEOPLE_SUCCESS,
  payload: people,
});

export const setError = (error) => ({
  type: FETCH_PEOPLE_FAILURE,
  payload: error,
});

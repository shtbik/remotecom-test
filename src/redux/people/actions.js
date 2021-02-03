import {
  SET_LOADING,
  SET_QUERY,
  SET_ERROR,
  FETCH_PEOPLE_REQUEST,
} from './actionTypes';

export const setLoading = () => ({
  type: SET_LOADING,
});

export const setQuery = ({ query }) => ({
  type: SET_QUERY,
  payload: query,
});

export const setPeopleData = ({ people }) => ({
  type: FETCH_PEOPLE_REQUEST,
  payload: people,
});

export const setMemberData = ({ type, member }) => ({
  type,
  payload: member,
});

export const setError = () => ({
  type: SET_ERROR,
});

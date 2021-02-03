import {
  SET_LOADING,
  SET_QUERY,
  SET_ERROR,
  FETCH_PEOPLE_REQUEST,
  FETCH_MEMBER_REQUEST,
} from './actionTypes';

export const setLoading = () => ({
  type: SET_LOADING,
});

export const setQuery = (query) => ({
  type: SET_QUERY,
  payload: query,
});

export const setPeopleData = (people) => ({
  type: FETCH_PEOPLE_REQUEST,
  payload: people,
});

export const setMemberData = (member) => ({
  type: FETCH_MEMBER_REQUEST,
  payload: member,
});

export const setError = (error) => ({
  type: SET_ERROR,
  payload: error,
});

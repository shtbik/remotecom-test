import axios from 'configs/api';

import {
  SET_LOADING,
  SET_QUERY,
  SET_ERROR,
  FETCH_PEOPLE_REQUEST,
  FETCH_MEMBER_REQUEST,
  EDIT_MEMBER_REQUEST,
} from './actionTypes';
import {
  setLoading,
  setQuery,
  setPeopleData,
  setMemberData,
  setError,
} from './actions';

// Async actions
export const fetchPeople = (query) => {
  return async (dispatch, getState) => {
    const { people, query: prevQuery } = getState();
    // for cases when user wants to search empty query and has already loaded full list
    console.log('fetchPeople', prevQuery, query, people.length);
    if ((!prevQuery && !query && people.length) || prevQuery === query) {
      return false;
    }

    dispatch(setLoading());
    dispatch(setQuery({ query: query || '' }));

    const params = {};
    if (query) params.name_like = query;

    try {
      const peopleRes = await axios.get('/people', {
        params,
      });
      dispatch(setPeopleData({ people: peopleRes.data }));
    } catch (error) {
      dispatch(setError());
    }
  };
};

export const fetchMember = (memberId) => {
  return async (dispatch, getState) => {
    const { people } = getState();
    dispatch(setLoading());

    if (people.length) {
      // This is a trick to divide a synchronous call stack and re-paint (re-render) changes
      // We can remove, but I need a power tool to manage form/field state and to avoid extra repaint
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        });
      });

      // eslint-disable-next-line eqeqeq
      const cachedMember = people.find((member) => member.id == memberId);
      if (cachedMember) {
        dispatch(
          setMemberData({ type: FETCH_MEMBER_REQUEST, member: cachedMember })
        );
        return;
      }
    }

    try {
      const memberRes = await axios.get('/people', {
        params: { id: memberId },
      });
      dispatch(
        setMemberData({ type: FETCH_MEMBER_REQUEST, member: memberRes.data[0] })
      );
    } catch (err) {
      dispatch(setError());
    }
  };
};

export const createOrUpdateMember = ({ id, memberInput }) => {
  return async (dispatch) => {
    dispatch(setLoading());

    const reqParams = {
      method: 'POST',
      path: '/people',
    };

    if (id) {
      reqParams.method = 'PATCH';
      reqParams.path = `/people/${id}`;
    }

    try {
      const { method, path } = reqParams;
      const memberRes = await axios(path, {
        method,
        data: memberInput,
      });

      dispatch(
        setMemberData({ type: EDIT_MEMBER_REQUEST, member: memberRes.data })
      );
      return memberRes.data.id;
    } catch {
      dispatch(setError());
    }
  };
};

// TMember
const initialMember = {
  id: 0,
  name: '',
  jobTitle: '',
  country: '',
  salary: '',
  currency: '',
  employment: '',
};

// TPeopleState
const initialState = {
  // Should move structure to Object for find cached value at O(1), but at the moment not so critical
  people: [],
  member: initialMember,
  query: '',
  loading: false,
  error: false,
};

// TODO: add Immutable.JS for the future
export default function peopleReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_LOADING:
      return { ...state, loading: true };
    case SET_QUERY:
      return { ...state, query: payload };
    case FETCH_PEOPLE_REQUEST:
      return {
        ...state,
        people: payload,
        member: initialMember,
        loading: false,
        error: false,
      };
    case FETCH_MEMBER_REQUEST:
    case EDIT_MEMBER_REQUEST:
      return { ...state, member: payload, loading: false, error: false };
    case SET_ERROR:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
}

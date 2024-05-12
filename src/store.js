import { createStore } from 'redux';

// Initial state
const initialState = {
  data: null,
  email: null,
};

// Reducer function
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_DATA':
      return { ...state, data: action.payload };
    case 'SET_DATA_EMAIL':
        return { ...state, email: action.payload };
    default:
      return state;
  }
};

// Create Redux store
const store = createStore(rootReducer);

export default store;

















// Action types
export const SET_DATA = 'SET_DATA';
export const SET_EMAIL = 'SET_DATA_EMAIL';
// Action creators
export const setData = (data) => ({
  type: SET_DATA,
  payload: data,
});

export const setEmail = (data) => ({
    type: SET_EMAIL,
    payload: data,
  });

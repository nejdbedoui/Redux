import { createStore } from 'redux';

// Initial state
const initialState = {
  data: null,
};

// Reducer function
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_DATA':
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

// Create Redux store
const store = createStore(rootReducer);

export default store;


// Action types
export const SET_DATA = 'SET_DATA';

// Action creators
export const setData = (data) => ({
  type: SET_DATA,
  payload: data,
});

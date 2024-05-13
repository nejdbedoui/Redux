import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {
  data: null,
  email: null,
  players: [],
  password: null,
};

const rootReducer = createSlice({
  name: 'root',
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPlayers: (state, action) => {
      state.players.push(action.payload);
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
  },
});

export const { setData, setEmail, setPlayers,setPassword } = rootReducer.actions;

export const store = configureStore({
  reducer: rootReducer.reducer,
  devTools: true, 
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;

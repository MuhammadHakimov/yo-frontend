import { createSlice } from "@reduxjs/toolkit";

let savedUser = null;

try {
  const user = localStorage.getItem("user");

  if (user) {
    savedUser = JSON.parse(user);
  }
} catch {
  localStorage.removeItem("user");
  savedUser = null;
}

const initialState = {
  register: null,
  login: savedUser,
};

const registrSlice = createSlice({
  name: "registr",

  initialState,

  reducers: {
    registar: (state, action) => {
      state.register = action.payload;
    },

    login: (state, action) => {
      state.login = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },

    logout: (state) => {
      state.login = null;
      localStorage.removeItem("user");
    },
  },
});

export const {
  registar,
  login,
  logout,
} = registrSlice.actions;

export default registrSlice.reducer;
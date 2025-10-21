import { createSlice } from "@reduxjs/toolkit";

// Safe JSON parse helper
const safeJSONParse = (value) => {
  try {
    return value && value !== "undefined" ? JSON.parse(value) : null;
  } catch {
    return null;
  }
};

// Load user and token safely
const storedUser = safeJSONParse(localStorage.getItem("user"));
const storedToken = safeJSONParse(localStorage.getItem("token"));

const initialState = {
  token: storedToken,
  user: storedUser,
  isAuthenticated: !!storedUser && !!storedToken,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
      //localStorage.setItem("user", JSON.stringify(action.payload));
      localStorage.setItem("token", JSON.stringify(action.payload.token));
    },
    setUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    },
  },
});

export const { loginSuccess, logout, setUser } = authSlice.actions;
export default authSlice.reducer;

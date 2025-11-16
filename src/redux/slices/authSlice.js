import { createSlice } from "@reduxjs/toolkit";

// Safe JSON parse
const safeJSONParse = (value) => {
  try {
    return value && value !== "undefined" ? JSON.parse(value) : null;
  } catch {
    return null;
  }
};

// Load user & token
const storedUser = safeJSONParse(localStorage.getItem("user"));
const storedToken = safeJSONParse(localStorage.getItem("token"));

// Load admin & token
const storedAdmin = safeJSONParse(localStorage.getItem("admin"));
const storedTokenAdmin = safeJSONParse(localStorage.getItem("tokenAdmin"));

const initialState = {
  // USER
  user: storedUser,
  token: storedToken,
  isAuthenticated: !!storedUser && !!storedToken,

  // ADMIN
  admin: storedAdmin,
  tokenAdmin: storedTokenAdmin,
  isAuthenticatedAdmin: !!storedTokenAdmin,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // USER LOGIN
    loginSuccess: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;

      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("token", JSON.stringify(action.payload.token));
    },

    // ADMIN LOGIN
    loginSuccessAdmin: (state, action) => {
      state.admin = action.payload.admin;
      state.tokenAdmin = action.payload.tokenAdmin;
      state.isAuthenticatedAdmin = true;

      localStorage.setItem("admin", JSON.stringify(action.payload.admin));
      localStorage.setItem("tokenAdmin", JSON.stringify(action.payload.tokenAdmin));
    },

    // UPDATE USER AFTER getMe()
    setUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },

    // UPDATE ADMIN
    setAdmin: (state, action) => {
      state.admin = action.payload;
      localStorage.setItem("admin", JSON.stringify(action.payload));
    },

    // USER LOGOUT
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    },

    // ADMIN LOGOUT
    logoutAdmin: (state) => {
      state.admin = null;
      state.tokenAdmin = null;
      state.isAuthenticatedAdmin = false;
      localStorage.removeItem("admin");
      localStorage.removeItem("tokenAdmin");
    },
  },
});

export const {
  loginSuccess,
  logout,
  setUser,
  loginSuccessAdmin,
  logoutAdmin,
  setAdmin,
} = authSlice.actions;

export default authSlice.reducer;

import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import toast, { Toaster } from "react-hot-toast";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};
const register = createAsyncThunk("auth/register", async (requisites) => {
  try {
    const { data } = await axios.post("/users/signup", requisites);
    token.set(data.token);
    return data;
  } catch (error) {
    console.log(error.message);
    toast.error("This user is already registered");
    <Toaster position="bottom-right" reverseOrder={false} />;
    return window.alert("This user is already registered");
  }
});

const logIn = createAsyncThunk("auth/login", async (requisites) => {
  try {
    const { data } = await axios.post("/users/login", requisites);
    token.set(data.token);
    return data;
  } catch (error) {
    console.log(error);
    toast.error("Wrong email or password");
    return window.alert("Wrong email or password");
  }
});

const logOut = createAsyncThunk("auth/logout", async () => {
  try {
    await axios.post("/users/logout");
    token.unset();
  } catch (error) {
    console.log(error);
  }
});

const fetchCurrentUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }
    token.set(persistedToken);
    try {
      const { data } = await axios.get("/users/current");
      return data;
    } catch (error) {}
  }
);

const authOperations = {
  register,
  logIn,
  logOut,
  fetchCurrentUser,
};

export default authOperations;

import { Dispatch } from "@reduxjs/toolkit";
import { login, getUser } from "../apis/userApi";
import { setToken, setUser } from "./reducers";

export const loginUser = (email: string, password: string) => async (dispatch: Dispatch) => {
  try {
    const data = await login(email, password);
    dispatch(setToken(data.token));
    return data.token;
  } catch (error) {
    console.error("Login failed", error);
  }
};

export const fetchUser = (token: string, userId: string) => async (dispatch: Dispatch) => {
  try {
    const userData = await getUser(token, userId);
    dispatch(setUser(userData));
  } catch (error) {
    console.error("Fetching user failed", error);
  }
};
import axios from "axios";
import { auth } from "../firebase/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const login = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const token = await userCredential.user.getIdToken();

    const response = await axios.post(`${API_URL}/auth/verify-token`, { token });
    return response.data;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};


export const getUser = async (token: string, userId: string) => {
  try {
    const response = await axios.get(`${API_URL}/users/${userId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error("Get user error:", error);
    throw error;
  }
};

export const updateUser = async (token: string, userId: string, data: any) => {
  try {
    const response = await axios.put(`${API_URL}/users/${userId}`, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error("Update user error:", error);
    throw error;
  }
};
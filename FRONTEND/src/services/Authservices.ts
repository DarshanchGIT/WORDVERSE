import { SigninInput, SignupInput } from "@darshanpm/wordverse";
import { backendURL } from "../config/env";
import axios from "axios";

interface AuthResponse<T> {
  token: string;
  user: T;
}

export const Signup = async (
  user: SignupInput
): Promise<AuthResponse<SignupInput>> => {
  try {
    const response = await axios.post<AuthResponse<SignupInput>>(
      `${backendURL}/user/signup`,
      {
        email: user.email,
        name: user.name,
        password: user.password,
      }
    );

    const token = response.data.token;
    if (token) {
      localStorage.setItem("authToken", token);
    }
    return response.data;
  } catch (error) {
    console.error("Signup Error:", error);
    throw error;
  }
};

export const Signin = async (
  user: SigninInput
): Promise<AuthResponse<SigninInput>> => {
  try {
    const response = await axios.post<AuthResponse<SigninInput>>(
      `${backendURL}/user/signin`,
      {
        email: user.email,
        password: user.password,
      }
    );

    const token = response.data.token;
    if (token) {
      localStorage.setItem("authToken", token);
    }
    return response.data;
  } catch (error) {
    console.error("Signin Error:", error);
    throw error;
  }
};

export const Logout = () => {
  try {
    {
      const token = localStorage.getItem("authToken");
      if (!token) {
        console.log("Token unavailable !!");
        return false;
      }
      localStorage.removeItem("authToken");
      console.log("User successfully logged out !!");
      return true;
    }
  } catch (error) {
    console.error("Logout Error:", error);
    throw error;
  }
};

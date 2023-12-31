import { createAsyncThunk } from '@reduxjs/toolkit';
import { loginAsync, registerAsync } from '../../services/auth';
import { LOCAL_TOKEN } from '../../utils/request_ip';

export const loginAsyncThunk = createAsyncThunk(
  'auth/login',
  async ({ email, password }) => {
    const response = await loginAsync({ email, password });
    return response;
  }
);

export const registerAsyncThunk = createAsyncThunk(
  'auth/register',
  async ({ firstName, lastName, email, age, password }) => {
    const response = await registerAsync({
      firstName,
      lastName,
      email,
      age,
      password,
    });
    return response;
  }
);

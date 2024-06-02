import AsyncStorage from '@react-native-async-storage/async-storage';
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {api} from '../../../config/api';

const initialState = {
  loading: false,
  user: [],
  token: undefined,
  error: undefined,
};

export const loginUser = createAsyncThunk(
  'auth/login',
  async (inputs, {rejectWithValue}) => {
    const {email, password} = inputs;
    try {
      const response = await api.post('mobilelogin', {
        email,
        password,
      });

      return response.data;
    } catch (err) {
      console.log(err.response);
      return rejectWithValue(err.response);
    }
  },
);


export const registerUser = createAsyncThunk(
  'auth/register',
  async (inputs, {rejectWithValue}) => {
    try {
      const response = await api.post('register', inputs);
      return response.data;
    } catch (err) {
      console.log(err.response);
      return rejectWithValue(err.response);
    }
  },
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(loginUser.pending, state => {
      state.loading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, {payload}) => {
      state.loading = false;
      state.user = payload.user;
      state.token = payload.token;
    });
    builder.addCase(loginUser.rejected, (state, {payload}) => {
      state.loading = false;
      state.error = payload;
    });
    builder.addCase(registerUser.pending, state => {
      state.loading = true;
    });
    builder.addCase(registerUser.fulfilled, (state, {payload}) => {
      state.loading = false;
    });
    builder.addCase(registerUser.rejected, (state, {payload}) => {
      state.loading = false;
    });
  },
});

// export const { logoutUser } = authSlice.actions;

export default authSlice;

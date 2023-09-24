import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axios from '../../axios/axios';

export const userLogin = createAsyncThunk(
	// axios({
	// 	method: 'post',
	// 	url: 'api/auth/login',
	// 	data: {
	// 		firstName: 'demo',
	// 		password: 'user',
	// 	},
	// })

	async ({ firstName, password }) => {
		try {
			const { data } = await axios.post('api/auth/login', {
				firstName,
				password,
			});
			if (data.token) {
				window.localStorage.setItem('token', data.token);
			}
			return data;
		} catch (error) {
			console.log(error);
		}
	}
);

export const authMe = createAsyncThunk('auth/authMe', async () => {
	const { data } = await axios.get('/auth/me');
	return data;
});

const initialState = {
	data: null,
	status: null,
	isLoading: false,
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		logout: (state) => {
			state.user = null;
			state.token = null;
			state.isLoading = false;
			state.status = null;
		},
	},
	extraReducers: {
		[userLogin.pending]: (state) => {
			state.isLoading = true;
			state.status = null;
		},
		[userLogin.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.status = action.payload.message;
			state.user = action.payload.user;
			state.token = action.payload.token;
		},
		[userLogin.rejected]: (state, action) => {
			state.status = action.payload.message;
			state.isLoading = false;
		},
	},
});

export const checkAuthMe = (state) => Boolean(state.auth.token);
export const { logout } = authSlice.actions;
export default authSlice.reducer;

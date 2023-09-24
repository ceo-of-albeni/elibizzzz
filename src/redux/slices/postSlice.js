import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios/axios';

export const createPost = createAsyncThunk(
	'post/createPost',
	async (params) => {
		try {
			const { data } = await axios.post('/posts', params);
			return data;
		} catch (error) {
			console.log(error);
		}
	}
);

export const getAllPosts = createAsyncThunk('post/getAllPosts', async () => {
	try {
		const { data } = await axios.get('/all-petitions');
		return data;
	} catch (error) {
		console.log(error);
	}
});

export const deletePost = createAsyncThunk('post/deletePost', async (id) => {
	try {
		const { data } = await axios.delete(`/posts/${id}`, id);
		return data;
	} catch (error) {
		console.log(error);
	}
});

const initialState = {
	posts: [],
	popularPosts: [],
	loading: false,
};

export const postSlice = createSlice({
	name: 'post',
	initialState,
	reducers: {},
	extraReducers: {
		[createPost.pending]: (state) => {
			state.loading = true;
		},
		[createPost.fulfilled]: (state, action) => {
			state.loading = false;
			state.posts.push(action.payload);
		},
		[createPost.rejected]: (state) => {
			state.loading = false;
		},

		[getAllPosts.pending]: (state) => {
			state.loading = true;
		},
		[getAllPosts.fulfilled]: (state, action) => {
			state.loading = false;
			state.posts = action.payload.posts;
			state.popularPosts = action.payload.popularPosts;
		},
		[getAllPosts.rejected]: (state) => {
			state.loading = false;
		},

		[deletePost.pending]: (state) => {
			state.loading = true;
		},
		[deletePost.fulfilled]: (state, action) => {
			state.loading = false;
			state.posts = state.posts.filter(
				(post) => post._id !== action.payload._id
			);
		},
		[deletePost.rejected]: (state) => {
			state.loading = false;
		},
	},
});

export default postSlice.reducer;

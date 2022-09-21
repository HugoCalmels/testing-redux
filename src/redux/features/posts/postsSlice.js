import { createSlice,createAsyncThunk } from "@reduxjs/toolkit"

export const initialState = {
  posts: [],
  status: "idle"
}
export const getAllPosts = createAsyncThunk("posts/getAllPosts", async (payload) => {
  const response = await fetch("http://localhost:3000/api/v1/posts")
  const data = await response.json()
  return data
})

export const createPost = createAsyncThunk("posts/createPost", async (payload) => {

  const postDetails = {
    post: {
      content: payload.post
    }
  }

  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postDetails)
  };
  const response = await fetch("http://localhost:3000/api/v1/posts", config)
  const data = await response.json()
  return data
})

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllPosts.pending, (state, action) => {
        state.status = "loading"
      })
      .addCase(getAllPosts.fulfilled, (state, action) => {
        state.posts = action.payload
        state.status = "succeeded"
      })
      .addCase(getAllPosts.rejected, (state, action) => {
        state.status = "failed"
      })
      .addCase(createPost.pending, (state, action) => {
        state.status = "loading"
      })
      .addCase(createPost.fulfilled, (state, action) => {
        console.log('AAAAAAA')
        console.log(action.payload)
        console.log('AAAAAAA')
        const posts = [...state.posts, action.payload]
        state.posts = posts
        state.status = "succeeded"
      })
      .addCase(createPost.rejected, (state, action) => {
        state.status = "failed"
      })
  }
})
  

export const selectAllPosts = (state) => state.posts.posts;
export const selectPostsStatus = (state) => state.posts.status;
export default postsSlice.reducer;
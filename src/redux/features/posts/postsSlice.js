import { createSlice,createAsyncThunk } from "@reduxjs/toolkit"

const initialState = {
  posts: [],
  status: "idle"
}
export const getAllPosts = createAsyncThunk("posts/getAllPosts", async (payload) => {
  const response = await fetch("http://localhost:3000/api/v1/posts")
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
  }
})
  

export const selectAllPosts = (state) => state.posts.posts;
export const selectPostsStatus = (state) => state.posts.status;
export default postsSlice.reducer;
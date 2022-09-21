import reducer, {
  initialState,
  getAllPosts,
  createPost
} from "./redux/features/posts/postsSlice";
import {
  mockNetWorkResponse,
  getAllPostsResponse,
  createPostResponse
} from "./redux/tests.data";
import {store} from "./redux/store"

/**
 * Testing the createUser thunk
 */
describe("Get all posts", () => {
  beforeAll(() => {
    mockNetWorkResponse();
  });

  it("Should return a list a posts", async () => {
      const result = await store.dispatch(getAllPosts());

      const posts = result.payload;

      expect(result.type).toBe("posts/getAllPosts/fulfilled");
      //expect(posts).toEqual(getAllPostsResponse);

      const state = store.getState().posts;

      //expect(state.posts).toEqual(getAllPostsResponse);
  });
   
})

describe("Create new post", () => {
  beforeAll(() => {
    mockNetWorkResponse()
  })

  it("Should be able to create a new post", async () => {
    const previousState = store.getState().posts
    const previousPosts = [...previousState.posts]
    const newContent = "test123123"
    const newPost = {
      id: previousPosts.length +1,
      content: newContent
    }
    
    previousPosts.push(newPost)

    const result = await store.dispatch(createPost({post:newContent}))

    const post = result.payload

    expect(result.type).toBe("posts/createPost/fulfilled")

    expect(post.content).toEqual(newPost.content)

    const state = store.getState().posts

    const filteredCurrentPosts = state.posts.map(post => [post.content, post.id])
    const filteredPreviousPosts = previousPosts.map(post =>  [post.content, post.id])

    // check if both matchs, they do, nice !
    console.log('8888888888888')
    console.log(filteredCurrentPosts)
    console.log('8888888888888')

    console.log('9999999999999')
    console.log(filteredPreviousPosts)
    console.log('9999999999999')

    expect(filteredCurrentPosts).toEqual(filteredPreviousPosts)


  })
})
import axios from "axios";
import MockAdapter from "axios-mock-adapter";


const createPostResponse = {
  post: {
    content: "test123123"
  
}
 


}

const getAllPostsResponse = [
  {
    id: 1,
    content: "toto",
  },
  {
    id: 2,
    content: "Leanne Graham",
  },
];

// Adding mock network response that is used in tests

const mockNetWorkResponse = () => {
  const mock = new MockAdapter(axios);

  mock.onGet(`/posts/`).reply(200, getAllPostsResponse);
  mock.onPost(`/posts/`).reply(200, createPostResponse);

};

export {
  mockNetWorkResponse,
  getAllPostsResponse,
  createPostResponse
};
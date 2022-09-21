import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react"
import { selectAllPosts, getAllPosts, selectPostsStatus,createPost } from "./redux/features/posts/postsSlice"
import {useState} from "react"

const Redux = () => {

  const status = useSelector(selectPostsStatus)

  const [newContent, setNewContent] = useState('')

  const dispatch = useDispatch()

  const posts = useSelector(selectAllPosts)

  const postList = posts.map(post => {
    return (<li>{post.content}</li>)
  })


  useEffect(() => {
    if (status === "idle") {
      dispatch(getAllPosts())
    }
  }, [status])
  
  useEffect(() => {
    if (status === "succeeded") {
      console.log(posts)
    }
  }, [posts])
  
  const handleAddPost = (e) => {
    e.preventDefault()
    console.log(newContent)
    dispatch(createPost({post: newContent}))
    setNewContent('')
  }
  
  return (
    <>
      <h1>REDUX</h1>
      <hr />
      <form onSubmit={(e)=>handleAddPost(e)}>
        <label htmlFor="newPost">Entrer un post :
          <input type="text" name="newPost" id="newPost" value={newContent} onChange={(e)=>setNewContent(e.target.value)}/>
        </label>
        <input type="submit" value="envoyer"/>
      </form>
    {postList}</>
  )
}

export default Redux
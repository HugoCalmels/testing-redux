import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react"
import {selectAllPosts, getAllPosts,selectPostsStatus}from "./redux/features/posts/postsSlice"

const Redux = () => {

  const status = useSelector(selectPostsStatus)

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
  },[posts])
  
  return (
    <><h1>REDUX</h1>
    {postList}</>
  )
}

export default Redux
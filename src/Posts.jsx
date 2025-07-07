import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fethcPosts } from './features/posts/postsSlice';

const Posts = () => {
    const {posts,isLoading,isError,error} =useSelector(state =>state.posts)
    const dispatch =useDispatch();
     useEffect (()=>{
        dispatch(fethcPosts())

     },[dispatch])
     //decide what to render
     let content;
     if(isLoading){
        content =<h1>Loading posts....</h1>
     }
     if(!isLoading && isError){
        content =<h1>{error}</h1>
     }
     if(!isLoading && !isError && posts.length===0){
        content=<h1>no posts found!</h1>
     }
        if(!isLoading && !isError && posts.length >0){
        content=<ul>{posts.map(posts => <li className='underline  list-decimal' key={posts.id}>{posts.title}</li>)}</ul>
     }
  return (
    <div>{content}</div>
  )
}

export default Posts
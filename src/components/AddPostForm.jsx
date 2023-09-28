import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { postAdded } from '../redux/PostSlice'
import { nanoid } from '@reduxjs/toolkit'

const AddPostForm = () => {
    const [title,setTitle]=useState("")
    const [content,setContent]=useState("")
    const dispatch=useDispatch()
    const onSavePostClicked=()=>{
            dispatch(postAdded({
                id:nanoid(),
                title,
                content
            }))
            setTitle('')
            setContent('')
    }
    return (
        <>
          <section>
              <h2>Add a New Post</h2>
              <form>
                  <label htmlFor="postTitle">Post Title:</label>
                  <input 
                  type="text"
                   name="postTitle" 
                   id="postTitle"
                   value={title}
                   onChange={(e)=>setTitle(e.target.value)}
                   />
                  <label htmlFor="postContent">Content:</label>
                  <textarea 
                  type="text"
                  name="postContent" 
                  id="postContent"
                  value={content}
                  onChange={(e)=>setContent(e.target.value)}
                  />
                  <button type="button" onClick={onSavePostClicked}>Save Post</button>
              </form>
         </section>  
        </>
    )
}

export default AddPostForm

import React from 'react'
import { useSelector } from 'react-redux'

const PostList = () => {
    const post=useSelector((state)=>state.post)
    console.log(post);
      const renderedPost=post.map((post)=>(
          <article key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.content.substring(0,100)}</p>
          </article>
      ))
    return (
        <>
         <section>
             <h2>Posts</h2>
             {renderedPost}
         </section>
        </>
    )
}

export default PostList

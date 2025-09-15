import React, { useState } from "react";
import PostForm from "./PostForm";
import PostList from "./PostList";

const BlogApp = () => {
    const [posts, setPosts] = useState([]);

    const aggiungiPost = (post) => {
        const nuovoPost = {...post, id: Date.now()};
        setPosts(prevPosts => [...prevPosts, nuovoPost]);
    };

    return (
        <div>
          <PostForm aggiungiPost={aggiungiPost}/>
          <PostList posts={posts}/>  
        </div>
    );
};

export default BlogApp;
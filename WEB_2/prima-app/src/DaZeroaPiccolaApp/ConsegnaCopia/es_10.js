import React, {useState} from 'react'

// BlogApp.js

const BlogApp = () => {
    const [posts, setPosts] = useState([]);

    function aggiungiPost(post){
        setPosts(prev => [...prev, post]);
        console.log("Post aggiunto alla lista dei posts: ", post)
    };

    return (
        <div>
            <h1>Il mio Blog</h1>
            <PostForm aggiungiPost={aggiungiPost}/>
            <PostList posts={posts}/>
        </div>  
    );
};

export default BloggApp;

// PostForm.js
const PostForm = ({aggiungiPost}) => {
    const [post, setPost] = useState({
        titolo: "", 
        contenuto: ""
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setPost(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        aggiungiPost(post);

        setPost({titolo: "", contenuto: ""})
    };   


    return (
        <form submit={handleSubmit}>
            <input
            type="text"
            name="titolo"
            value={post.titolo}
            onChange={handleChange}
            placeholder="Inserisci il titolo del post: "
            />

            <textarea
            name="contenuto"
            value={post.contenuto}
            onChange={handleChange}
            placeholder="Inserisci il contenuto del post: "
            />
        
        <button type="submit">Invia</button>
        </form>
    )
}

// export default PostForm;


// PostList.js
const PostList = ({posts}) => {

    return (
        <div>
            {posts.map((p) => {
                return (
                    <article key={p.id}>
                        <div>{p.titolo}</div>
                        <div>{p.contenuto}</div>
                    </article>
                );
            })};
        </div>
    );
};

// export default PostList;



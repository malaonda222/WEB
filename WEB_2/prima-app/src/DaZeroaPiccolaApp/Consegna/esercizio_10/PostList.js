import React from "react";

const PostList = ({posts}) => {
    return (
        <div>
            {posts.map((p)=> (
                <article key={p.id}>
                    <h3>{p.titolo}</h3>
                    <p>{p.contenuto}</p>
                </article>
            ))}
        </div>
    );
};

export default PostList;
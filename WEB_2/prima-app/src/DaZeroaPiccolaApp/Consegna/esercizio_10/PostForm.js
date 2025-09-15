import React, { useState } from "react";

const PostForm = ({aggiungiPost}) => {
    const [titolo, setTitolo] = useState("")
    const [contenuto, setContenuto] = useState("")

    const handleSubmit = (e) => {
    e.preventDefault();

    const nuovoPost = {
        titolo, 
        contenuto
    };
    aggiungiPost(nuovoPost);

    setTitolo("")
    setContenuto("")
    };

    return (
        <div className="container border py-3">
            <form className="row g-3" onSubmit={handleSubmit}>
                <div className="col-md-6">
                    <label htmlFor="inputTitolo" className="form-label">Titolo</label>
                    <input 
                    type="text" 
                    value={titolo} 
                    onChange={(e)=>setTitolo(e.target.value)}>
                    </input>
                </div>
                
                <div className="col-md-6">
                    <label htmlFor="inputContenuto" className="form-label">Contenuto</label>
                    <input 
                    type="text" 
                    value={contenuto} 
                    onChange={(e)=>setContenuto(e.target.value)}>
                    </input>
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Invia</button>
                </div>
        </form>
        </div>
    );
};

export default PostForm;
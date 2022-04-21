import React, { useState, useEffect } from "react";
import axios from "axios";
import {Button, Row, Col, Card} from 'react-bootstrap';
import {Link } from 'react-router-dom'

const BlogList = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/posts",
    })
      .then((res) => {
        setData(res.data);
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, []);

    return (
        <div class="bloglist">
            {loading && (
        <div>
          {" "}
          <h1>Loading...</h1>
        </div>
      )}
        <div class="container">
        <h1>Depronto blogs</h1>
      
        <ul>
        {Array.from(data).map((posts) => (
          <li class="post">
          <div class="post__excerpt card">
           <header class="card__header">
           <Link to={`/posts/${posts.id}`}><h5>{posts.title}</h5></Link>
             <time class="card__date" datetime="2018-08-26">Author: {posts.userId}</time>
           </header>
           <p>{posts.body}</p>
           <div class="card__cta">
           <Link to={`/posts/${posts.id}`}>Read more</Link>
           </div>
          </div>
          <img class="post__image" src="https://source.unsplash.com/s9w2MR8nsts/700x600" alt=""/>
          </li>
          ))}

        </ul>
      </div>
      </div>
    );
}

export default BlogList;

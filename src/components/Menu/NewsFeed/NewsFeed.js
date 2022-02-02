import { Pagination, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Post from './Post';
import './newsFeed.css'

const NewsFeed = () => {
    const [posts,setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [pageCount, setPageCount] = useState(1);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(data=>{
            setPageCount(Math.ceil(data.length/6));
            const start = 0+ ((page-1)*6)
            setPosts(data.slice(start,start+6))
        })
    },[page]);
    console.log(posts)

    const handleChange = (event, value) => {
        setPage(value);
     };
    return (
        <div className='dash-container'>
            <h1>NewsFeed</h1>
            <div className="row pt-2">
            {
               posts.map(post => <Post key={post.id} post={post}></Post>)
            }
         </div>
         <div className="d-flex justify-content-center py-4">
            <Stack spacing={2}>
               <Pagination count={pageCount} page={page} onChange={handleChange} />
            </Stack>
         </div>
        </div>
    );
};

export default NewsFeed;
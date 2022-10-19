import React, {useState, useEffect} from 'react'
import Posts from './Posts';

function Fund() {
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(3);

  return (
    <div>
      <h1 className='text-primary'>My</h1>
      <Posts posts={posts}/>
    </div>
  )
}

export default Fund;

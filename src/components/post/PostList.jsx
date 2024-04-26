

import { useState } from 'react';
import PostCard from './PostCard';

function PostList({ posts }) {
  const [currentPage] = useState(1);
  const postsPerPage = 5;

 
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

 

  return (
    <div className="post-list">
      {currentPosts.map((post) => (
        <PostCard post={post} key={post.id} />
      ))}
      
    </div>
  );
}

export default PostList;

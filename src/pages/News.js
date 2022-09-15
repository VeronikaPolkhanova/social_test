import React from 'react';
import { useSelector } from 'react-redux';

import PostList from '../components/postList';
import './pages.css';

function NewsPage() {
    const posts = useSelector(store => store.posts);
    return (
        <section className='page'>
            <h1 className='h1'>News</h1>
            <PostList posts={posts} />
        </section>
    );
}

export default NewsPage;
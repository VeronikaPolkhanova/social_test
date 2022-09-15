import { useState } from "react";
import PostItem from "../postItem";

import "./post.css";

function PostList({ posts }) {
    
    const [selected, setSelected] = useState(null);

    const handleChangeSelect = (event) => {
        if (event.target.value !== "all") {
            setSelected(event.target.value);
        }
        else setSelected(null);
    }

    const postList = <ul className="post-list">
        {posts.filter((item) => item.topic === selected || selected === null).map((item) => <PostItem item={item} key={item.id} />)}
    </ul>

    return (
        <>
            <label className='label'>Topic:</label>
            <select defaultValue="all" className='select' onChange={handleChangeSelect}>
                <option>sport</option>
                <option>art</option>
                <option>music</option>
                <option>other</option>
                <option>all</option>
            </select>
            {posts.length === 0 ? <p className="label">News are empty :(</p> : postList}
        </>
    )
}
export default PostList;
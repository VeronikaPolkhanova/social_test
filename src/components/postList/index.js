import { useState } from "react";
import { useDispatch } from "react-redux";

import moment from "moment";

import { deletePostAction } from "../../store/actions";

import "./post.css";

function PostList({ posts }) {
    const [selected, setSelected] = useState(posts);
    const dispatch = useDispatch();

    const deletePost = (id) => {
        dispatch(deletePostAction(id));
        setSelected(selected.filter((item) => item.id !== id));
    }

    const handleChangeSelect = (event) => {
        if (event.target.value !== "all") {
            setSelected(posts.filter((item) => item.topic === event.target.value));
        }
        else setSelected(posts);
    }

    const postList = <ul className="post-list">
        {selected.map((item) => <li className="post-item" key={item.id}>
            <p>{item.text}</p>
            <p>Topic: {item.topic}</p>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <p>{moment(item.date).format("D MMM YYYY")} {moment(item.date).format("HH:mm")}</p>
                <button className="button" onClick={() => deletePost(item.id)}>delete</button>
            </div>
        </li>)}
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
            {selected.length === 0 ? <p className="label">News are empty :(</p> : postList}
        </>
    )
}
export default PostList;
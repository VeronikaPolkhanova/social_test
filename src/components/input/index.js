import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import './input.css';

function Input({ propsDispatch, editedItem, type }) {

    const dispatch = useDispatch();
    
    const [post, setValue] = useState({
        text: editedItem ? editedItem.text : '',
        topic: editedItem ? editedItem.topic : 'sport',
    });
    const [isPosted, setIsPosted] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if (post.text === undefined || post.text === "" || post.text === null || post.text.length > 300) {
            setIsPosted(false);
        }
        else {
            if(type === "edit") {
                dispatch(propsDispatch({post, id: editedItem.id}));
            }
            else if(type === "add") {
                dispatch(propsDispatch(post));
            }
            setValue({
                text: '',
                topic: 'sport',
            });
            setIsPosted(true)
        }
    }

    const handleChangeInput = (event) => {
        setValue({ ...post, text: event.target.value });
    }

    const handleChangeSelect = (event) => {
        setValue({ ...post, topic: event.target.value });
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <label className='label'>Tap post</label>
            <textarea
                className='textarea'
                style={{ borderColor: `${post.text.length > 300 ? "red" : "#09b7bd"}` }}
                type="text"
                onChange={handleChangeInput}
                placeholder=""
                value={post.text}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <div>
                    <label className='label'>Topic:</label>
                    <select className='select' value={post.topic} onChange={handleChangeSelect}>
                        <option>sport</option>
                        <option>art</option>
                        <option>music</option>
                        <option>other</option>
                    </select>
                </div>
                <button className='button'>Post</button>
            </div>
            <label
                className='label'
                style={{ color: `${isPosted === false ? 'red' : '#09b7bd'}` }}
            >
                {isPosted === "" ? "" :
                    (isPosted === true ? "Successfully posted!" :
                        "Post must not be empty and less then 300 symbols")}</label>
        </form>
    )
}
export default Input;
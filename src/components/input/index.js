import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNoteAction } from '../../store/actions';

import './input.css';

function Input() {
    const dispatch = useDispatch();
    const [post, setValue] = useState({
        text: '',
        topic: '',
    });
    const [isPosted, setIsPosted] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if (post.text === undefined || post.text === "" || post.text === null || post.text.length > 300) {
            setIsPosted(false);
        }
        else {
            dispatch(addNoteAction(post));
            setValue({
                text: '',
                topic: '',
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
            <label className='label'>New post</label>
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
                    <select className='select' onChange={handleChangeSelect}>
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
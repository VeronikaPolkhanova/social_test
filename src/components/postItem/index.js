import { useState } from "react";
import { useDispatch } from "react-redux";

import moment from "moment";

import { deletePostAction } from "../../store/actions"
import Modal from "../modal";

function PostItem({ item }) {
    
    const [isModal, setIsModal] = useState(false);

    const dispatch = useDispatch();

    const deletePost = (id) => {
        dispatch(deletePostAction(id));
    }
    const toggleModal = () => {
        setIsModal(isModal => !isModal);
    }
    return (
        <li className="post-item" key={item.id}>
            <p>{item.text}</p>
            <p>Topic: {item.topic}</p>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <p>{moment(item.date).format("D MMM YYYY")} {moment(item.date).format("HH:mm")}</p>
                <div>
                    <button className="button" onClick={() => deletePost(item.id)}>delete</button>
                    <button className="button" onClick={toggleModal}>edit</button>
                </div>
            </div>
            {isModal &&
                <Modal onClose={toggleModal} editedItem={item} />
            }
        </li>
    )
}
export default PostItem;
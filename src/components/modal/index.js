import ReactDOM from "react-dom";

import { IoClose } from 'react-icons/io5';

import { editePostAction } from '../../store/actions';
import Input from '../input';

import "./modal.css";

function Modal({ onClose, editedItem }) {
    return ReactDOM.createPortal(
        <div className="modal-bg">
            <div className="modal-dialog">
                <button className="close-button" onClick={onClose}>
                    <IoClose />
                </button>
                <Input propsDispatch={editePostAction} editedItem={editedItem} type="edit" />
            </div>
        </div>,
        document.getElementById("portal")
    )
}
export default Modal;
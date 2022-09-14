export const ADD_NOTE = "ADD_NOTE";
export const DELETE_POST = "DELETE_POST";
export const EDIT_POST = "DELETE_POST";

export const addNoteAction = (payload) => ({ type: ADD_NOTE, payload });
export const deletePostAction = (payload) => ({ type: DELETE_POST, payload });
export const editePostAction = (payload) => ({ type: EDIT_POST, payload });
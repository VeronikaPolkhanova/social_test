import { ADD_NOTE, DELETE_POST, EDIT_POST } from './actions';
import posts from './posts';

const defaultState = {
    user: {
        name: "Veronika Polkhanova",
        age: "22",
        photo: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        hobbies: "sport, movies, fashion",
        bio: "Hello world, im just a girl with some goals!"
    },
    posts: posts
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_NOTE:
            return {
                ...state, posts: [...state.posts, {
                    id: state.posts.length + 1,
                    text: action.payload.text,
                    date: new Date(),
                    topic: action.payload.topic
                }]
            };

        case DELETE_POST:
            return { ...state, posts: state.posts.filter(it => it.id !== action.payload) };

        case EDIT_POST:
            return {}
        default:
            return state;
    }
}
export default reducer;
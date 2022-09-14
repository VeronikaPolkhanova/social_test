import "./user.css";

function UserLogged(props) {
    const { user, posts } = props;
    return (
        <div className="header-profile">
            <div className="user-avatar">
                <img src={user.photo} alt="user" />
            </div>
            <p>Hello, {user.name}!</p>
            <p>You have {posts.length} post</p>
        </div>
    )
}
export { UserLogged };
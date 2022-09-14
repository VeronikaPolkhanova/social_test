import "./user.css";

function UserProfile({ user }) {
    return (
        <div className="header-profile">
            <div className="user-avatar">
                <img src={user.photo} alt="user" />
            </div>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <p>Hobbies: {user.hobbies}</p>
            <p>Bio: {user.bio}</p>
        </div>
    )
}
export { UserProfile };
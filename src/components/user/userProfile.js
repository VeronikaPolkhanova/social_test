import "./user.css";

function UserProfile({ user }) {
    const { name, age, hobbies, bio, photo } = user;
    return (
        <div className="header-profile">
            <div className="user-avatar">
                <img src={photo} alt="user" />
            </div>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Hobbies: {hobbies}</p>
            <p>Bio: {bio}</p>
        </div>
    )
}
export { UserProfile };
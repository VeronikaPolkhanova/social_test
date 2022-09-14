import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { GiHamburgerMenu } from 'react-icons/gi';
import moment from "moment";

import { UserLogged } from "../user/userLogged";

import './header.css';

function Header() {
    const [toggle, setToggle] = useState(false);
    const user = useSelector(store => store.user);
    const posts = useSelector(store => store.posts);

    return (
        <>
            <div className={`header ${toggle === true ? 'active' : ''}`}>
                <GiHamburgerMenu className="burger" style={{ display: `${toggle === true ? 'none' : 'block'}` }} onClick={() => setToggle(!toggle)} />
                <p className="label" style={{ margin: 0 }}>{moment(Date()).format("D MMM YYYY")}</p>
                <UserLogged user={user} posts={posts}/>
                <nav style={{ display: 'flex', flexDirection: 'column' }}>
                    <Link className="link" onClick={() => setToggle(!toggle)} to="/profile">Profile</Link>
                    <Link className="link" onClick={() => setToggle(!toggle)} to="/news">News</Link>
                </nav>
            </div>
            <div className="header-bg" onClick={() => setToggle(!toggle)} style={{ display: `${toggle === true ? 'inline' : 'none'}` }}></div>
        </>
    )
}
export default Header;
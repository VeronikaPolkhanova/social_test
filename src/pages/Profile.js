import React from 'react';
import { useSelector } from 'react-redux';

import Input from '../components/input';
import { UserProfile } from '../components/user/userProfile';

import './pages.css';

function ProfilePage() {
    const user = useSelector(store => store.user);
    return (
        <section className='page'>
            <h1 className='h1'>Profile</h1>
            <div className='profile-container'>
                <div className='user-section'>
                    <UserProfile user={user} />
                </div>
                <div className='user-news'>
                    <Input />
                </div>
            </div>
        </section>
    );
}

export default ProfilePage;
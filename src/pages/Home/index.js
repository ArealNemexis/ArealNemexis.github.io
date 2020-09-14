import React, { useEffect, useState } from 'react';
import Avatar from './components/Avatar';
import BackgroundSquare from './components/BackgroundSquare';
import Title from './components/Title';
import Contacts from './components/Contacts';
import './index.css';

function Home() {
    const [User, setUser] = useState({});

    var [Name, setName] = useState('');
    useEffect(() => {
        async function getProfileData() {
            const response = await fetch(
                'https://api.github.com/users/ArealNemexis'
            );
            const data = await response.json();
            setUser(data);
            setName(data.name.split(' ').slice(0, 2).join(' '));
        }

        getProfileData();
    }, []);
    // name = name.split('').slice(0, 2).join('');
    return (
        <div id="home-component">
            <div id="avatar-component">
                <Avatar id="usr-avatar" avatar_url={User.avatar_url} />
            </div>
            <BackgroundSquare>
                <Title id="username">{Name}</Title>
                <Contacts></Contacts>
            </BackgroundSquare>
        </div>
    );
}

export default Home;

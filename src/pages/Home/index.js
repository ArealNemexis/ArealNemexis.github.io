import React, { useEffect, useState } from 'react';
import Avatar from './components/Avatar/Avatar';
import BackgroundSquare from './components/BackgroundSquare/BackgroundSquare';
import Title from './components/Title/Title';
import Contacts from './components/Contacts/Contacts';
import AboutMe from './components/AboutMe/AboutMe';
import Academic from './components/Academic/Academic';
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

    return (
        <div id="home-component">
            <div id="avatar-component">
                <Avatar id="usr-avatar" avatar_url={User.avatar_url} />
            </div>
            <BackgroundSquare>
                <Title id="username">{Name}</Title>
                <Contacts></Contacts>
                <AboutMe></AboutMe>
                <Academic></Academic>
            </BackgroundSquare>
        </div>
    );
}

export default Home;

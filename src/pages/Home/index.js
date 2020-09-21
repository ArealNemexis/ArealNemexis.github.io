import React, { useEffect, useState } from 'react';
import './index.css';
import Avatar from './components/Avatar/Avatar';
import BackgroundSquare from './components/BackgroundSquare/BackgroundSquare';
import Title from './components/Title/Title';
import Contacts from './components/Contacts/Contacts';
import AboutMe from './components/AboutMe/AboutMe';
import Academic from './components/Academic/Academic';
import Skills from './components/Skills/Skills';
import Skill from './components/Skills/Skill/Skill';

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
            <Avatar avatar_url={User.avatar_url} />
            <BackgroundSquare>
                {/* <Title id="username">{Name}</Title>
                <Contacts></Contacts>
                <AboutMe></AboutMe>
                <Academic></Academic>
                <Skills>
                    <Skill skillName="python3" valueSkill="5" />
                    <Skill skillName="javascript" valueSkill="4" />
                    <Skill skillName="typescript" valueSkill="4" />
                    <Skill skillName="html" valueSkill="4" />
                    <Skill skillName="css" valueSkill="4" />
                    <Skill skillName="react" valueSkill="4" />
                    <Skill skillName="nodejs" valueSkill="4" />
                    <Skill skillName="ingles" valueSkill="4" />
                    <Skill skillName="espanhol" valueSkill="4" />
                    <Skill skillName="sql" valueSkill="3" />
                    <Skill skillName="c e c++" valueSkill="3" />
                    <Skill skillName="kotlin" valueSkill="2" />
                    <Skill skillName="java" valueSkill="2" />
                </Skills> */}
            </BackgroundSquare>
        </div>
    );
}

export default Home;

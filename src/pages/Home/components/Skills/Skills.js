import React from 'react';
import './Skills.css';

function Skills(props) {
    return (
        <div id="skills-div">
            <h2>Skills</h2>
            <ul id="skills-list">{props.children}</ul>
        </div>
    );
}

export default Skills;

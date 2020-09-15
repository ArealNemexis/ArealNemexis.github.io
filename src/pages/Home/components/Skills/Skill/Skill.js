import React, { useEffect, useState } from 'react';
import './Skill.css';

function Skill(props) {
    const [skill, setSkill] = useState([]);

    useEffect(() => {
        let array = [];

        for (var i = 0; i < 5; i++) {
            if (i < Number(props.valueSkill)) {
                array.push(
                    <li className="skill-li" key={i}>
                        <div className="level-div fully"></div>
                    </li>
                );
            } else {
                array.push(
                    <li className="skill-li" key={i}>
                        <div className="level-div empty"></div>
                    </li>
                );
            }
        }
        setSkill(array);
    }, [props]);

    return (
        <li className="skill-item">
            <h4 className="skill-name">{props.skillName.toUpperCase()}</h4>
            <ul className="skill-ul-level">{skill.map((item) => item)}</ul>
        </li>
    );
}

export default Skill;

/* <li className="skill-li">
                    <div className="level-div fully"></div>
                </li>
                <li className="skill-li">
                    <div className="level-div fully"></div>
                </li>
                <li className="skill-li">
                    <div className="level-div fully"></div>
                </li>
                <li className="skill-li">
                    <div className="level-div fully"></div>
                </li>
                <li className="skill-li">
                    <div className="level-div empty"></div>
                </li> */

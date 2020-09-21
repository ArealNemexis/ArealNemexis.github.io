import React from 'react';
import './Avatar.css';
function Avatar(props) {
    return (
        <div id="avatardiv">
            <img src={props.avatar_url} id="usr-avatar" alt="" />
        </div>
    );
}

export default Avatar;

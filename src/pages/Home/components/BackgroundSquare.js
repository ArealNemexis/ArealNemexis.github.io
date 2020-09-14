import React from 'react';
import './BackgroundSquare.css';

function BackgroundSquare(props) {
    return <div id="background-Square">{props.children}</div>;
}

export default BackgroundSquare;

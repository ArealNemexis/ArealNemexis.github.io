import React from 'react';
import './Contacts.css';
function Contacts() {
    return (
        <div id="contacts-component">
            <ul id="contacts-list">
                <li id="contacts-item">
                    <a
                        href="mailto:lucas0409lf@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa fa-envelope icons"></i>
                    </a>
                </li>
                <li id="contacts-item">
                    <a
                        href="https://api.whatsapp.com/send?phone=5561992614682&text=olá,%20vi%20seu%20curriculo%20e%20me%20interessei,%20teria%20disponibilidade%20para%20conversar?"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa fa-whatsapp icons"></i>
                    </a>
                </li>
                <li id="contacts-item">
                    <a
                        href="https://github.com/ArealNemexis"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa fa-github icons"></i>
                    </a>
                </li>
                <li id="contacts-item">
                    <a
                        href="https://www.linkedin.com/in/lucas-ferreira-de-araujo/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa fa-linkedin-square icons"></i>
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Contacts;

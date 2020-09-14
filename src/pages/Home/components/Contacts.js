import React from 'react';
import './Contacts.css';
function Contacts() {
    return (
        <div id="contacts-component">
            <ul id="contacts-list">
                <li>
                    <a
                        href="mailto:lucas0409lf@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa fa-envelope icons"></i>
                    </a>
                </li>
                <li>
                    <a
                        href="https://api.whatsapp.com/send?phone=5561992614682"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa fa-whatsapp icons"></i>
                    </a>
                </li>
                <li>
                    <a
                        href="https://github.com/ArealNemexis"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa fa-github icons"></i>
                    </a>
                </li>
                <li>
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

import React, { useEffect, useState } from 'react';
import './Avatar.css';
function Avatar() {
	const [user, setUser] = useState({});
	useEffect(() => {
		async function getProfileData() {
			const response = await fetch('https://api.github.com/users/ArealNemexis');
			const data = await response.json();
			setUser(data);
		}

		getProfileData();
	}, []);
	return <img src={user.avatar_url} id="usr-avatar" alt="" />;
}

export default Avatar;

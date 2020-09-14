import { useEffect, useState } from 'react';
const [User, setUser] = useState({});
useEffect(() => {
    async function getProfileData() {
        const response = await fetch(
            'https://api.github.com/users/ArealNemexis'
        );
        const data = await response.json();
        setUser(data);
    }

    getProfileData();
}, []);

export default User;

import { useEffect, useState } from "react";

const useToken = (user) => {
    const [token, setToken] = useState('');
    useEffect(() => {
        const email = user?.user?.email;
        if (email) {
            const currentUser = { email: email };
            const url = `https://pure-tor-94821.herokuapp.com/user/${email}`;
            fetch(url, {
                method: "PUT",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(currentUser)
            })
                .then(request => request.json())
                .then(data => {
                    console.log(`data inside useToken ${data}`);
                    const accessToken = data.token;
                    localStorage.setItem('accessToken', accessToken);
                    setToken(accessToken);
                })
        }
    }, [user]);

    return [token];
};
export default useToken;

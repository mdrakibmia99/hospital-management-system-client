import React, { useEffect, useState } from 'react';

const useDoctor = (user) => {
    const [doctor, setDoctor] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true);
    useEffect(() => {
        const email = user?.email;
        if (email) {
            fetch(`http://localhost:5000/doctor/${email}`, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    setDoctor(data.doctor);
                    setAdminLoading(false);
                })
        }
    }, [user])

    return [doctor, adminLoading]
};

export default useDoctor;
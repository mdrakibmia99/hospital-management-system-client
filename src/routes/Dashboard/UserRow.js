import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ index, user, refetch }) => {
    const { email, role } = user;
    const handleRemoveUser = (email) => {
        fetch(`http://localhost:5000/user/${email}`, {
            method: "DELETE",
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(request => request.json())
            .then(response => {
                console.log(response)
                if (response.deletedCount) {
                    toast.success(`deletion ${email} success`);
                    refetch();
                }
            })
    };
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: "PUT",
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('failed to continue this operation');
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    console.log(data);
                    toast.success('making admin done');
                    refetch();
                }
            })
    };
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{!role && <button onClick={() => makeAdmin()} className='btn btn-primary btn-sm'>Make Admin</button>}</td>
            <td><button className='btn btn-secondary btn-sm' onClick={() => handleRemoveUser(email)}>Remove User</button></td>
        </tr>
    );
};

export default UserRow;
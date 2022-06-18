import React from 'react';
import { toast } from 'react-toastify';

const DeleteBox = ({ deleteDoctor, refetch, setDeleteDoctor }) => {
    const { name, email } = deleteDoctor;
    const handleRemoveDoctor = (email) => {
        fetch(`http://localhost:5000/doctor/${email}`, {
            method: "DELETE",
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(request => request.json())
            .then(response => {
                console.log(response)
                if (response.deletedCount) {
                    toast.success(`deletion ${name} success`);
                    setDeleteDoctor(null);
                    refetch();
                }
            })
    };
    return (
        <div>
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Are you sure wanna delete <b className='text-pink-500'>{name}</b>?</h3>
                    <p className="py-4">Is yes then proceed with <b className='text-green-500'>Okay</b> else <b className='text-red-500'>Cancel</b></p>
                    <div className="modal-action">
                        <label htmlFor="my-modal-6" className="btn btn-primary" onClick={() => handleRemoveDoctor(email)} >Okay</label>
                        <label htmlFor="my-modal-6" className="btn btn-secondary">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteBox;
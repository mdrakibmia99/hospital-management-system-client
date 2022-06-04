import React from 'react';
import { toast } from 'react-toastify';

const DeleteBox = ({ deleteDoctor, refetch, setDeleteDoctor }) => {
    const { name, email } = deleteDoctor;
    const handleRemoveDoctor = (email) => {
        fetch(`https://pure-tor-94821.herokuapp.com/doctor/${email}`, {
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
            <input type="checkbox" id="my-modal-6" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Are you sure wanna delete <b className='text-pink-500'>{name}</b>?</h3>
                    <p class="py-4">Is yes then proceed with <b className='text-green-500'>Okay</b> else <b className='text-red-500'>Cancel</b></p>
                    <div class="modal-action">
                        <label for="my-modal-6" class="btn btn-primary" onClick={() => handleRemoveDoctor(email)} >Okay</label>
                        <label for="my-modal-6" class="btn btn-secondary">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteBox;
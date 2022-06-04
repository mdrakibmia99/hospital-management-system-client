import React from 'react';

const DoctorRow = ({ index, doctor, setDeleteDoctor }) => {
    const { name, img, specialty } = doctor;

    return (
        <tr className='hover'>
            <th>{index + 1}</th>
            <td>
                {/* <img src={img} alt="avatar" className='w-8 h-8 rounded-full object-cover' /> */}
                <div class="avatar">
                    <div class="w-8 mask mask-hexagon">
                        <img src={img} alt='avatar' />
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td>{specialty}</td>
            <td>
                <label for="my-modal-6" onClick={() => setDeleteDoctor(doctor)} className="btn btn-active btn-sm bg-red-500 border-0 text-white">Remove</label>
            </td>
        </tr>
    );
};

export default DoctorRow;
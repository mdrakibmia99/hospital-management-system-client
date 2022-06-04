import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../components/Loading/Loading';
import DeleteBox from './DeleteBox';
import DoctorRow from './DoctorRow';

const ManageDoctors = () => {
    const [deleteDoctor, setDeleteDoctor] = useState(null);
    const { data: doctors, isLoading, refetch } = useQuery('doctor', () => fetch('https://pure-tor-94821.herokuapp.com/doctor', {
        method: "GET",
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading />
    }

    return (
        <div>
            <h2 className="text-2xl">Manage Doctors: {doctors.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map((doctor, index) => <DoctorRow
                                key={doctor._id}
                                index={index}
                                doctor={doctor}
                                setDeleteDoctor={setDeleteDoctor}
                            />)
                        }
                    </tbody>
                </table>
            </div>
            {deleteDoctor && <DeleteBox
                key={deleteDoctor._id}
                deleteDoctor={deleteDoctor}
                setDeleteDoctor={setDeleteDoctor}
                refetch={refetch}
            />}
        </div>
    );
};

export default ManageDoctors;
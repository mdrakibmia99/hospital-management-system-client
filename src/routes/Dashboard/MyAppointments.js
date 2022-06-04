import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import PageTitle from '../../components/PageTitle/PageTitle';
import auth from '../../firebase.init';
import AppointmentTable from './AppointmentTable';

const MyAppointments = () => {
    const [myAppointments, setMyAppointments] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            const getMyAppointments = async () => {
                const url = `https://pure-tor-94821.herokuapp.com/bookings?email=${user.email}`;
                const res = await axios.get(url, {
                    method: "GET",
                    headers: {
                        "authorization": `Bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                console.log(res?.status);
                if (res?.status === 401 || res?.status === 403) {
                    signOut();
                    localStorage.removeItem('accessToken');
                    navigate('/login');
                }
                setMyAppointments(res?.data);
            };
            getMyAppointments();
        }
    }, [user, navigate]);
    return (
        <div>
            <PageTitle title={'doctors portal - my appointments'} />
            <div>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* <!-- head --> */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Service</th>
                                <th>Time</th>
                                <th>Payment</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                myAppointments?.length === 0
                                    ?
                                    <div class="alert alert-info shadow-lg mt-12">
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current flex-shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                            <span>No treatment taken by you still now.</span>
                                        </div>
                                    </div>
                                    :
                                    myAppointments.map((myAppointment, index) => <AppointmentTable
                                        key={myAppointment._id}
                                        myAppointment={myAppointment}
                                        index={index}
                                    />)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyAppointments;
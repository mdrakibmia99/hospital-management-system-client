import { format } from 'date-fns';
import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import PageTitle from '../../components/PageTitle/PageTitle';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [date, setDate] = useState(new Date());
    // const formattedDate = format(date, "PP");
    const [showCalender, setShowCalender] = useState(false);
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);

    return (
        <div>
            <PageTitle title={'doctors portal - dashboard'} />
            <div class="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content p-4">
                    {/* <!-- Page content here --> */}
                    <div className='flex justify-between items-center mb-4'>
                        <h1 className='text-2xl text-purple-500'>My Appointment</h1>
                        {/* clickable button is here */}
                        <button className='btn text-white' onClick={() => setShowCalender(!showCalender)}>{date ? format(date, "PP"): 'Choose a date'}</button>
                    </div>
                    <div className='relative'>
                        <div className={`absolute right-0 bg-white shadow rounded-lg z-20 ${!showCalender && "hidden"}`}>
                            <DayPicker
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                            />
                        </div>
                    </div>
                    <Outlet />

                </div>
                <div class="drawer-side shadow-2xl">
                    <label for="dashboard-drawer" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to={'/dashboard'}>My Appointments</Link></li>
                        <li><Link to={'/dashboard/reviews'}>My Reviews</Link></li>
                        {admin && <>
                            <li><Link to={'/dashboard/users'}>All Users</Link></li>
                            <li><Link to={'/dashboard/addDoctor'}>Add Doctor</Link></li>
                            <li><Link to={'/dashboard/manageDoctor'}>Manage Doctor</Link></li>
                        </>
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;
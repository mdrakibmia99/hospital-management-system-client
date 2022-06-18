import { format } from 'date-fns';
import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import PageTitle from '../../components/PageTitle/PageTitle';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import useDoctor from '../../hooks/useDoctor';

const Dashboard = () => {
    const [date, setDate] = useState(new Date());
    // const formattedDate = format(date, "PP");
    const [showCalender, setShowCalender] = useState(false);
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    const [doctor]=useDoctor(user);
     console.log("user k ",user)
    return (
        <div>
            <PageTitle title={'Dashboard'} />
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content p-4">
                    {/* <!-- Page content here --> */}
                    <div className='flex justify-between items-center mb-4'>
                        <h1 className='text-2xl text-purple-500'>My Appointment</h1>
                        {/* clickable button is here */}
                        <button className='btn text-white' onClick={() => setShowCalender(!showCalender)}>{date ? format(date, "PP") : 'Choose a date'}</button>
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
                <div className="drawer-side shadow-2xl">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                      
                       {
                        doctor?  <li><Link to={'/dashboard/patientlist'}> Patient List</Link></li>
                    :
                        <>
                         {!admin &&
                            <li><Link to={'/dashboard/myappointment'}>My Appointments</Link></li>
                        }
                        {!admin &&
                        <li><Link to={'/dashboard/reviews'}>My Reviews</Link></li>
}
                        {admin && <>
                            <li><Link to={'/dashboard/users'}>All Users</Link></li>
                            <li><Link to={'/dashboard/addDoctor'}>Add Doctor</Link></li>
                            <li><Link to={'/dashboard/manageDoctor'}>Manage Doctor</Link></li>
                        </>
                        }
                        </>
                       }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;
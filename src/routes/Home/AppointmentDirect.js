import React from 'react';
import { Link } from 'react-router-dom';
import appointment from '../../assets/images/appointment.png';
import doctor from '../../assets/images/doctor-small.png';
import StaticBtn from '../../components/StaticBtn/StaticBtn';

const AppointmentDirect = () => {
    return (
        <div
            className='lg:mt-48 mt-20'
        >
            <div
                className='grid lg:grid-cols-2 grid-cols-1 items-center lg:p-28 md:p-28 p-8 rounded-lg relative bg-no-repeat bg-cover'
                style={{ backgroundImage: `url(${appointment})` }}
            >
                <div>
                    <img
                        src={doctor}
                        alt="doctor"
                        className='absolute -top-40 left-0 max-w-full lg:block hidden'
                    />
                </div>
                <div className=''>
                    <h4 className='uppercase text-primary font-bold'>Appointment</h4>
                    <h2 className='text-3xl mt-4 text-white'>Make an appointment today</h2>
                    <p className='text-white py-6'>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
                    </p>
                    <Link to={'/appointment'}>

                    <StaticBtn>Get Started</StaticBtn>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AppointmentDirect;
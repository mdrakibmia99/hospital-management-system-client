import React from 'react';
import clock from '../../assets/icons/clock.svg';
import phone from '../../assets/icons/phone.svg';
import marker from '../../assets/icons/marker.svg';

const Appointment = () => {
    const appointmentInformations = [
        {
            _id: 1,
            title: "Opening Hours",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, ipsam.",
            icon: clock,
            bgFrom: '#19D3AE',
            bgTo: '#0FCFEC'
        },
        {
            _id: 2,
            title: "Contact us now",
            desc: "+000 123 456789",
            icon: marker,
            bgFrom: '#0C0404',
            bgTo: '#0FCFEC'
        },
        {
            _id: 3,
            title: "Visit our location",
            desc: "Brooklyn, NY 10036, United States",
            icon: phone,
            bgFrom: '#19D3AE',
            bgTo: '#0FCFEC'
        }
    ];

    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 lg:px-0 md:px-0 px-4 -mt-8'>
            {
                appointmentInformations.map(appointmentInformation => <div
                    key={appointmentInformation._id}
                    className={`card card-side lg:flex-row md:flex-row flex-col
                        ${appointmentInformation._id !== 2 ? `bg-gradient-to-r from-[${appointmentInformation.bgFrom}] to-[${appointmentInformation.bgTo}]` : 'bg-[#3A4256]'} 
                        shadow-xl p-4`}>
                    <figure><img src={appointmentInformation.icon} alt="appointment" className='lg:w-full md:w-full w-1/4' /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-white">{appointmentInformation.title}</h2>
                        <p className='text-white'>{appointmentInformation.desc}</p>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Appointment;
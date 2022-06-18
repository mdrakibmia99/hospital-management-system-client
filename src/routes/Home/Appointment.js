import React from 'react';
import clock from '../../assets/icons/clock.svg';
import phone from '../../assets/icons/phone.svg';
import marker from '../../assets/icons/marker.svg';

const Appointment = () => {
    const appointmentInformations = [
        {
            _id: 1,
            title: "Opening Hours",
            desc: "The appointmenet opening hours are 8 a.m. to 6 p.m",
            icon: clock,
            bgFrom: '#19D3AE',
            bgTo: '#0FCFEC'
        },
        {
            _id: 2,
            title: "Contact us now",
            desc: `Phone: +8801913547448`,
            desc1:" E-mail:group-f@gmail.com",
            icon: marker,
            bgFrom: '#0C0404',
            bgTo: '#0FCFEC'
        },
        {
            _id: 3,
            title: "Visit our location",
            desc: "Gazipur,1346 kashimpur",
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
                        ${appointmentInformation._id !== 2 ? `bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC]` : 'bg-[#3A4256]'} 
                        shadow-xl p-4`}>
                    <figure><img src={appointmentInformation.icon} alt="appointment" className='lg:w-full md:w-full w-1/4' /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-white">{appointmentInformation.title}</h2>
                        <p className='text-white'>{appointmentInformation.desc}</p>
                        {appointmentInformation?.desc1 && 
                        <p className='text-white'>{appointmentInformation.desc1}</p>
                        }
                    </div>
                </div>)
            }
        </div>
    );
};

export default Appointment;
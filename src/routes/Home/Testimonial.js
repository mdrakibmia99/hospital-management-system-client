import React from 'react';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
import quote from '../../assets/icons/quote.svg';

const Testimonial = () => {
    const testimonials = [
        {
            _id: 1,
            desc: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: people1,
            name: "Winson Herry",
            residence: "California"
        },
        {
            _id: 2,
            desc: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: people2,
            name: "Lee Bing Bing",
            residence: "Canada"
        },
        {
            _id: 3,
            desc: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: people3,
            name: "Elizabeth Holmes",
            residence: "France"
        }
    ];
    return (
        <div className='mt-20'>
            <div
                className='lg:px-0 px-4 bg-no-repeat'
                style={{ backgroundImage: `url(${quote})`, backgroundPosition: '100% 0%', backgroundSize: '200px 100px' }}
            >
                <h4 className='uppercase text-primary font-bold'>Appointment</h4>
                <h2 className='text-3xl mt-4'>Make an appointment today</h2>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 lg:px-0 md:px-4 px-4 mt-16'>
                    {
                        testimonials.map(testimonial => <div
                            key={testimonial._id}
                            className="card glass pt-8 pl-8 pr-8 shadow-2xl">
                            <p>{testimonial.desc}</p>
                            <div
                                className="card-body flex flex-row items-center"
                            >
                                <div className="avatar">
                                    <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img
                                            src={testimonial.img}
                                            alt=''
                                        />
                                    </div>
                                </div>
                                <div className='ml-4'>
                                    <h2 className="card-title whitespace-nowrap">{testimonial.name}</h2>
                                    <p>{testimonial.residence}</p>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
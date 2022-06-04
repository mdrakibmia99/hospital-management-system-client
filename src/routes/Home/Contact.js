import React from 'react';
import appointment from '../../assets/images/appointment.png';

const Contact = () => {
    return (
        <div className='my-20'>
            <div
                className='lg:p-28 md:p-28 p-8 rounded-lg relative bg-no-repeat bg-cover'
                style={{ backgroundImage: `url(${appointment})` }}
            >
                <div className='lg:w-1/2 w-full px-5 mx-auto '>
                    <div className='text-center mb-10'>
                        <h4 className='uppercase text-primary font-bold'>CONTACT US</h4>
                        <h2 className='text-3xl mt-4 text-white'>Stay connected with us</h2>
                    </div>
                    <div className='text-center'>
                        <input type="text" placeholder="Email Address" className="input w-full mb-3 " />
                        <input type="text" placeholder="Subject" className="input w-full mb-3" />
                        <textarea className="textarea w-full mb-3 h-40" placeholder="Your message"></textarea>
                        <button className="btn border-0 font-bold text-white bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC] px-12">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
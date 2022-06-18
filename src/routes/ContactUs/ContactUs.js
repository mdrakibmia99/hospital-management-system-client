import React from 'react';
import PageTitle from '../../components/PageTitle/PageTitle';
import appointment from '../../assets/images/appointment.png';
const ContactUs = () => {
    return (
        <div>
            <PageTitle title={'Contact us'} />
            <div className=''>
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
                        <form
                        action="https://formsubmit.co/rkrakibhasan680@gmail.com"
                        method="POST"
                        className="card-body"
                    >
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Your Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                name="name"
                                className="input input-bordered"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                name="email"
                                className="input input-bordered"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Your message</span>
                            </label>
                            <textarea
                                type="text"
                                placeholder="Your message"
                                name="message"
                                className="input input-bordered"
                            />
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" className="btn btn-primary" value="Send Email" />
                        </div>
                    </form>

                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default ContactUs;
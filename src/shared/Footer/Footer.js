import React from 'react';
import { Link } from 'react-router-dom';
import footer from '../../assets/images/footer.png';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div
            className='bg-white  bg-no-repeat bg-cover bg-center'
            style={{ backgroundImage: `url(${footer})` }}
        >
            <hr />
            <div
                className="container mx-auto"
            >
                <footer className="footer p-10 text-neutral-content">
                    <div>
                        <span className="footer-title text-black">SERVICES</span>
                        <Link to='/' className="link link-hover text-black">Emergency Checkup</Link>
                        <Link to='/' className="link link-hover text-black">Monthly Checkup</Link>
                        <Link to='/' className="link link-hover text-black">Weekly Checkup</Link>
                        <Link to='/' className="link link-hover text-black">Deep Checkup</Link>
                    </div>
                    <div>
                        <span className="footer-title text-black">Service</span>
                        <Link to='/' className="link link-hover text-black">Cardiologist</Link>
                        <Link to='/' className="link link-hover text-black">Oncologists</Link>
                        <Link to='/' className="link link-hover text-black">Plastic Surgeons</Link>
                        <Link to='/' className="link link-hover text-black">Gynecologist</Link>
                    </div>
                    <div>
                        <span className="footer-title text-black">OUR ADDRESS</span>
                        <Link to='/' className="link link-hover text-black">Gazipur,1346 kashimpur</Link>
                    </div>
                </footer>
                <hr className='w-1/2 mx-auto' />
                <section className="footer footer-center p-4 text-base-content">
                    <div>
                        <p>Copyright © {year} - All right reserved by "GROUP" F"</p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Footer;
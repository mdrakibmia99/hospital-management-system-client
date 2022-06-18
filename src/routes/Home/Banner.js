import React from 'react';
import chair from '../../assets/images/chair.png';
import chairBG from '../../assets/images/bg.png';
import StaticBtn from '../../components/StaticBtn/StaticBtn';
import hospital from '../../assets/images/hospital-img.jpg'

const Banner = () => {
    return (
        <div
            className="hero min-h-screen bg-base-100 bg-no-repeat bg-cover bg-bottom"
            style={{ backgroundImage: `url(${chairBG})` }}
        >
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={hospital} className="rounded-lg shadow-2xl lg:w-1/2" alt='hero_image' />
                <div>
                    <h1 className="text-4xl font-bold  lg:w-10/12 md:w-1/2">Welcome To Our Hospital Management System</h1>
                    <p className="py-6">Hospital management system is a computer system that helps manage the information related to health care and aids in the job completion of health care providers effectively</p>
                    <StaticBtn>Get Started</StaticBtn>
                </div>
            </div>
        </div>
    );
};

export default Banner;
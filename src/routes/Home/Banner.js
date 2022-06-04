import React from 'react';
import chair from '../../assets/images/chair.png';
import chairBG from '../../assets/images/bg.png';
import StaticBtn from '../../components/StaticBtn/StaticBtn';

const Banner = () => {
    return (
        <div
            className="hero min-h-screen bg-base-100 bg-no-repeat bg-cover bg-bottom"
            style={{ backgroundImage: `url(${chairBG})` }}
        >
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="rounded-lg shadow-2xl lg:w-1/2" alt='hero_image' />
                <div>
                    <h1 className="text-5xl font-bold  lg:w-1/2 md:w-1/2">Your New Smile Starts Here</h1>
                    <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <StaticBtn>Get Started</StaticBtn>
                </div>
            </div>
        </div>
    );
};

export default Banner;
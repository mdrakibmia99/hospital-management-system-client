import React from 'react';
import chair from '../../assets/images/chair.png';
import hospital from '../../assets/images/hospital-img.jpg';
import appointment from '../../assets/images/appointment-img.jpg'
import chairBG from '../../assets/images/bg.png';
import 'react-day-picker/dist/style.css';
import { DayPicker } from 'react-day-picker';

const Banner = (props) => {
    const {selected, setSelected} = props;
    return (
        <div>
            <div
                className="hero min-h-screen bg-base-100 bg-no-repeat bg-cover bg-bottom"
                style={{ backgroundImage: `url(${chairBG})` }}
            >
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={appointment} className="rounded-lg shadow-2xl lg:w-1/2" alt='hero_image' />
                    <div className='lg:w-1/2 md:w-1/2 w-full text-center'>
                        <div className='bg-white inline-block shadow-2xl rounded-xl'>
                            <DayPicker
                                mode='single'
                                selected={selected}
                                onSelect={setSelected}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
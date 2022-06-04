import React from 'react';
import PageTitle from '../../components/PageTitle/PageTitle';
import Footer from '../../shared/Footer/Footer';
import Appointment from './Appointment';
import AppointmentDirect from './AppointmentDirect';
import Banner from './Banner';
import Contact from './Contact';
import Services from './Services';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div>
            <PageTitle title={'doctors portal - home'} />
            {/* banner */}
            <Banner />
            <div
                className='container mx-auto'
            >
                {/* appointment information */}
                <Appointment />

                {/* services */}
                <Services />

                {/* appointment direct */}
                <AppointmentDirect />

                {/* Testimonial */}
                <Testimonial />

                {/* contact */}
                <Contact />
            </div>
            {/* footer */}
            <Footer />
        </div>
    );
};

export default Home;
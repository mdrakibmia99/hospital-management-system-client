import React from 'react';
import PageTitle from '../../components/PageTitle/PageTitle';
import Footer from '../../shared/Footer/Footer';
import AllReviews from './AllReviews';
import Appointment from './Appointment';
import AppointmentDirect from './AppointmentDirect';
import Banner from './Banner';
import Contact from './Contact';
import Services from './Services';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div>
            <PageTitle title={'Home'} />
            {/* banner */}
            <Banner />
            <div
                className='container mx-auto'
            >
                {/* appointment information */}
                <Appointment />

                <AllReviews></AllReviews>

                {/* services */}
                <Services />

                {/* appointment direct */}
                <AppointmentDirect />

                {/* Testimonial */}
                {/* <Testimonial /> */}

                {/* contact */}
                <Contact />
            </div>
            {/* footer */}
            <Footer />
        </div>
    );
};

export default Home;
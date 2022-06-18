import React from 'react';
import PageTitle from '../../components/PageTitle/PageTitle';
import bgimg from '../../assets/images/login.png'

const DashboardIndex = () => {
    return (
        <div>
            <PageTitle title={'Dashboard'} />
        <div className="hero min-h-screen"
            style={{
                backgroundImage: `url(${bgimg})`
            }}
        >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-6xl font-bold">Hello there</h1>
                    <p className="mb-5 text-3xl text-white ">Welcome to your dashboard.</p>
                </div>
            </div>
        </div>
    </div>

    );
};

export default DashboardIndex;
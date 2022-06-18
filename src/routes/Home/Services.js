import React from 'react';
import cavity from '../../assets/images/cavity.png';
import fluoride from '../../assets/images/fluoride.png';
import whitening from '../../assets/images/whitening.png';
import treatment from '../../assets/images/treatment.png';
import StaticBtn from '../../components/StaticBtn/StaticBtn';
import emergency from  '../../assets/images/emergency.png';
import Blood from '../../assets/images/blood.png'
import primaryCare from '../../assets/images/primary care.png'

const Services = () => {
    const servicesInformations = [
        {
            _id: 1,
            title: "Emergency Service",
            desc: "Emergency services and rescue services are organizations which ensure public safety and health by addressing different emergencies. Some of these agencies exist solely for addressing certain types of emergencies whilst others deal with ad hoc emergencies as part of their normal responsibilities.",
            img: emergency
        },
        {
            _id: 2,
            title: "Blood Draw Service",
            desc: "Mobile phlebotomists can travel to a patient's home and collect the blood following the same procedures they would in a medical facility. While insurance may pay for mobile phlebotomy services in some cases, patients usually report that they have to pay the fee themselves",
            img: Blood
        },
        {
            _id: 3,
            title: "Primary Care",
            desc: "Primary care is the day-to-day healthcare given by a health care provider. Typically this provider acts as the first contact and principal point of continuing care for patients within a healthcare system, and coordinates other specialist care that the patient may need.",
            img: primaryCare
        }
    ];
    return (
        <div className='mt-20'>
            <h4 className='uppercase text-center text-primary font-bold'>Our Services</h4>
            <h2 className='text-center text-5xl mt-4'>Services We Provide</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 lg:px-0 md:px-4 px-4 lg:mt-10 md:mt-10 mt-4'>
                {
                    servicesInformations.map(serviceInformation => <div
                        key={serviceInformation._id}
                        className="card glass pt-8">
                        <figure><img className='w-48 h-48' src={serviceInformation.img} alt="car!" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{serviceInformation.title}</h2>
                            <p>{serviceInformation.desc}</p>
                        </div>
                    </div>)
                }
            </div>
            {/* <div className="hero min-h-screen mt-10">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={treatment} className="rounded-lg shadow-2xl lg:w-1/2" alt='treatment_children' />
                    <div className='lg:ml-12 md:ml-8 lg:w-1/2 w-full'>
                        <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <StaticBtn>Get Started</StaticBtn>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default Services;
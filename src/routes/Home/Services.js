import React from 'react';
import cavity from '../../assets/images/cavity.png';
import fluoride from '../../assets/images/fluoride.png';
import whitening from '../../assets/images/whitening.png';
import treatment from '../../assets/images/treatment.png';
import StaticBtn from '../../components/StaticBtn/StaticBtn';

const Services = () => {
    const servicesInformations = [
        {
            _id: 1,
            title: "Fluoride Treatment",
            desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas aut cumque, iure perferendis iste vel!",
            img: fluoride
        },
        {
            _id: 2,
            title: "Cavity Filling",
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, molestiae voluptate. Ipsam molestias voluptates magnam possimus, dolorem neque cupiditate tempora!",
            img: cavity
        },
        {
            _id: 3,
            title: "Teeth Whitening",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi facere nisi porro provident delectus est reiciendis incidunt natus quisquam minima?",
            img: whitening
        }
    ];
    return (
        <div className='mt-20'>
            <h4 className='uppercase text-center text-primary font-bold'>Our Services</h4>
            <h2 className='text-center text-5xl mt-4'>Services We Provide</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 lg:px-0 md:px-4 px-4 lg:-mt-10 md:-mt-10 mt-4'>
                {
                    servicesInformations.map(serviceInformation => <div
                        key={serviceInformation._id}
                        className="card glass pt-8">
                        <figure><img src={serviceInformation.img} alt="car!" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{serviceInformation.title}</h2>
                            <p>{serviceInformation.desc}</p>
                        </div>
                    </div>)
                }
            </div>
            <div className="hero min-h-screen mt-10">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={treatment} className="rounded-lg shadow-2xl lg:w-1/2" alt='treatment_children' />
                    <div className='lg:ml-12 md:ml-8 lg:w-1/2 w-full'>
                        <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <StaticBtn>Get Started</StaticBtn>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
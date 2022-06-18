import { format } from 'date-fns';
import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../components/Loading/Loading';
import Modal from './Modal';
// const axios = require('axios').default;

const Services = (props) => {
    const { selected, treatment, setTreatment } = props;
    // const [services, setServices] = useState([]);
    // const [loading, setLoading] = useState(true);

    const formattedDate = format(selected, "PP");

    const { data: services, isLoading, refetch } = useQuery(['available', formattedDate], () =>
        fetch(`http://localhost:5000/available?date=${formattedDate}`)
            .then(request => request.json())
    )

    if (isLoading) {
        return <Loading />;
    }

    // useEffect(() => {
    //     const getServices = async () => {
    //         const url = `http://localhost:5000/available?date=${formattedDate}`;
    //         const { data } = await axios.get(url);
    //         setServices(data);
    //         setLoading(false);
    //     };
    //     getServices();
    // }, [formattedDate, loading]);

    return (
        <div className='my-20'>
            <div>
                <h3 className='text-primary text-2xl text-center'>Available Appointments on {format(selected, 'PP')}</h3>
                {/* {loading && <Loading />} */}
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12 lg:px-0 md:px-4 px-4 mt-10'>
                    {
                        services.map(service => <div
                            className="card bg-base-100 shadow-xl"
                            key={service._id}
                        >
                            <div className="card-body">
                                <h2 className="card-title justify-center mb-4">{service.name}</h2>
                                <p className='text-center'>
                                    {
                                        service.slots.length > 0 ? service?.slots[Math.floor(Math.random() * (service.slots.length))] : 'No service available, sorry!'
                                    }
                                </p>
                                <p className={`text-center ${service.slots.length === 0 ? 'text-red-500' : 'text-primary'}`}>{service.slots.length} {service.slots.length === 0 ? 'SPACE' : 'SPACES'} AVAILABLE</p>
                                <p className='text-center flex justify-center items-center'>$<span className='text-xl text-green-500'>{service.price}</span></p>
                                <div className="card-actions justify-center">
                                    <label
                                        htmlFor="booking-modal"
                                        className="
                                        btn border-0 
                                        text-white 
                                        bg-gradient-to-r 
                                        from-secondary 
                                        to-primary
                                        hover:bg-gradient-to-r
                                        hover:from-primary
                                        hover:to-secondary
                                        mt-4
                                        modal-button
                                    "
                                        disabled={service.slots.length === 0}
                                        onClick={() => setTreatment(service)}
                                    >
                                        Book Appointment
                                    </label>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
            {/* modal */}
            <Modal
                treatment={treatment}
                date={selected}
                refetch={refetch}
            />
        </div>
    );
};

export default Services;
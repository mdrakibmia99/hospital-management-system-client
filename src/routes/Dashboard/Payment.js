import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51L1UJyGRKrLWu7ojISpbxVO8rKxWSJ44p1Yt61p6zV7PaM3G6WRLKhJSY47ZIDJhtZ0yiRSCZlqpf541x4JaYKQ700Iam3gy2f');

const Payment = () => {
    const { id } = useParams();
    const url = `https://pure-tor-94821.herokuapp.com/booking/${id}`;
    const { data: appointment, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: "GET",
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(request => request.json()))

    /** 
     * appointment
     * ------------
     * treatmentName
     * patientName
     * appointmentTime
     * appointmentDate
     */

    if (isLoading) {
        return <Loading />
    }
    return (
        <div>
            <h2 className='text-xl text-green-500'>This is Payment route: <span className='text-red-500'>{id}</span></h2>
            <div className='hero min-h-screen bg-base-200'>
                <div className='hero-content'>
                    <div class="card w-full bg-base-100 shadow-xl">
                        <div class="card-body">
                            <h2 class="card-title">{appointment?.patientName}</h2>
                            <p>Your appointment for <span className='bg-green-300'>{appointment.treatmentName}</span> is set on <span className='text-red-500'>{appointment.appointmentDate}</span> at <span className='text-red-500'>{appointment.appointmentTime}</span></p>
                            <p className='text-red-500 flex items-center'>You have to pay $<span className='text-green-500 text-xl'>{appointment.price}</span></p>
                            <div class="card-actions block m-4">
                                <Elements stripe={stripePromise}>
                                    <CheckoutForm
                                        key={appointment._id}
                                        appointment={appointment}
                                    />
                                </Elements>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;
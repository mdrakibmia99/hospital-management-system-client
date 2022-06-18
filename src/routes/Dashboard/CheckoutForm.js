import React, { useEffect, useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const CheckoutForm = ({ appointment }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [cardPaymentMethod, setCardPaymentMethod] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');

    const { price, patientName, patientEmail, _id } = appointment;

    // useEffect(() => {
    //     fetch('http://localhost:5000/create-payment-intent', {
    //         method: "POST",
    //         headers: {
    //             "content-type": "application/json",
    //             "authorization": `Bearer ${localStorage.getItem('accessToken')}`
    //         },
    //         body: JSON.stringify({ price })
    //     })
    //         .then(request => request.json())
    //         .then(data => console.log(data))
    // }, [price]);

    useEffect(() => {
        fetch('http://localhost:5000/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ price })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret);
                }
            });

    }, [price]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        setCardError(error?.message || '');
        setCardPaymentMethod(paymentMethod.card.brand || '');
        setProcessing(true);

        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: patientName,
                        email: patientEmail
                    },
                },
            },
        );

        if (intentError) {
            setCardError(intentError.message);
            setProcessing(false);
        } else {
            setCardError('');
            setTransactionId(paymentIntent?.id);
            setSuccess(`Congrats! Your payment done successfully!`);

            const payment = {
                appointment: _id,
                transactionId: paymentIntent.id
            }

            fetch(`http://localhost:5000/booking/${_id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment)
            }).then(res => res.json())
                .then(data => {
                    setProcessing(false);
                    console.log(data);
                })
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button type="submit" className="btn btn-sm btn-primary btn-xl mt-e mt-4" disabled={!stripe || !clientSecret}>
                    Make Payment
                </button>
            </form>
            {(cardError || cardPaymentMethod) && <p className='mt-4 text-red-500 font-bold'><small>{cardError || `you are using ${cardPaymentMethod} card!`}</small></p>}
            {success && <p className='text-green-500 mt-4'>{success}</p>}
            {success && <p className='mt-4 font-bold font-mono'>Transacton is: <span className='text-red-500'>{transactionId}</span></p>}
        </>
    );
};

export default CheckoutForm;
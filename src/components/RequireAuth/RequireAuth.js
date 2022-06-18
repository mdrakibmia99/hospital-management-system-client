import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Error from '../Error/Error';
import Loading from '../Loading/Loading';

const RequireAuth = ({ children }) => {
    const [user, loading, errorUser] = useAuthState(auth);
    const [sendEmailVerification, sending, errorVerification] = useSendEmailVerification(auth);
    const location = useLocation();

    const handleVerificationCode = async () => {
        console.log(user);
        await sendEmailVerification();
        if (!errorUser || !errorVerification) {
            toast(`verification sent to ${user?.email}`);
        }
    }

    if (loading) {
        return <Loading />
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }


    if (user?.providerData[0]?.providerId === 'password' && !user?.emailVerified) {
        return (
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:w-1/2 md:w-1/2 w-full lg:px-0 md:px-0 px-4">
                <div className="max-w-xl p-8 text-center text-gray-800 shadow-xl lg:max-w-3xl rounded-3xl lg:p-12 mx-auto bg-gray-50">
                    <h3 className="text-2xl">Thanks for signing up for Doctors Portal!</h3>
                    {sending && <Loading />}
                    {(errorUser && <Error message={errorUser?.message} />) || (errorVerification && <Error message={errorVerification.message} />)}
                    <div className="flex justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-24 h-24 text-green-400" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"
                                d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76" />
                        </svg>
                    </div>

                    <p>We're happy you're here. Let's get your email address verified :)</p>
                    <div className="mt-4">
                        <button
                            className="
                                btn 
                                btn-block 
                                bg-white
                                text-black
                                hover:text-white
                                border-2
                                border-neutral
                                hover:border-neutral
                                hover:bg-neutral
                                lg:w-1/2 
                                w-fll 
                                mx-auto 
                                rounded-lg"
                            type='button'
                            onClick={handleVerificationCode}
                        >
                            Click to Verify Email
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return children;
};

export default RequireAuth;
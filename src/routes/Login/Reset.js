import React from 'react';
import { useAuthState, useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Error from '../../components/Error/Error';
import Loading from '../../components/Loading/Loading';
import PageTitle from '../../components/PageTitle/PageTitle';
import auth from '../../firebase.init';

const Reset = () => {
    const [user] = useAuthState(auth);
    const location = useLocation();
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";

    const [
        sendPasswordResetEmail,
        sending,
        error
    ] = useSendPasswordResetEmail(auth);

    const handleResetForm = async (event) => {
        event.preventDefault();

        const email = event.target.email.value;
        await sendPasswordResetEmail(email);

        toast(`Reset link sent to ${email}`);
        event.target.reset();

        navigate('/login');
    };

    if (user) {
        navigate(from, { replace: true });
    }
    return (
        <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:w-1/2 md:w-1/2 w-full lg:px-0 md:px-0 px-4'>
            <PageTitle title={'doctors portal - reset password'} />
            <div className="block p-6 rounded-xl shadow-xl bg-white max-w-sm mx-auto">
                <h2 className='text-3xl mb-4'>Forgot password!</h2>
                {sending && <Loading />}
                {error && <Error message={error.message} />}
                <form onSubmit={handleResetForm}>
                    <div className="form-group mb-6">
                        <label htmlFor="exampleInputEmail2" className="form-label inline-block mb-2 text-gray-700">Email address</label>
                        <input type="email" className="form-control
                            block
                            w-full
                            px-3
                            py-1.5
                            text-base
                            font-normal
                            text-gray-700
                            bg-white bg-clip-padding
                            border border-solid border-gray-300
                            rounded
                            transition
                            ease-in-out
                            m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputEmail2"
                            aria-describedby="emailHelp" placeholder="Enter email"
                            name='email'
                            required
                        />
                    </div>
                    <input type="submit" value="Reset"
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
                    />
                </form>
            </div>
        </div>
    );
};

export default Reset;
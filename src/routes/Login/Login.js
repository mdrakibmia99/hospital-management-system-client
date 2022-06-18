import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuthState, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';
import PageTitle from '../../components/PageTitle/PageTitle';
import useToken from '../../hooks/useToken';
import loginBg from '../../assets/images/hospital-new.jpg' 


const Login = () => {
    const [user] = useAuthState(auth);

    const [
        signInWithGoogle,
        userG,
        loadingG,
        errorG
    ] = useSignInWithGoogle(auth);

    const [
        signInWithEmailAndPassword,
        userEP,
        loadingEP,
        errorEP,
    ] = useSignInWithEmailAndPassword(auth);

    const [token] = useToken(userG || userEP);

    const location = useLocation();
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, navigate, from]);

    // sign in with email and password
    const handleLoginForm = async (event) => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;

        await signInWithEmailAndPassword(email, password);

        event.target.reset();
    };

    // sign in with google
    const handleSignInWithGoogle = async () => {
        await signInWithGoogle();
    };

    if (loadingG || loadingEP) {
        return <Loading />
    }

    return (
        <div
        className="hero min-h-screen bg-base-100 bg-no-repeat  bg-bottom"
        style={{ backgroundImage: `url(${loginBg})` }}>
        <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:w-1/2 md:w-1/2 w-full lg:px-0 md:px-0 px-4'>
            <PageTitle title={'Login'} />
            <div className="flex flex-col w-full border-opacity-50">
                <div>
                    <div className="w-full p-6 m-auto bg-white rounded-md shadow-lg lg:max-w-md">
                        <h1 className="text-3xl font-semibold text-center text-primary">LOGIN</h1>
                        {(loadingG || loadingEP) && <Loading />}
                        {(errorG && <Error message={errorG?.message} />) || (errorEP && <Error message={errorEP?.message} />)}
                        <form
                            className="mt-6"
                            onSubmit={handleLoginForm}
                        >
                            <div>
                                <label htmlFor="email" className="block text-sm text-gray-800">Email</label>
                                <input
                                    type="email"
                                    name='email'
                                    className="block w-full px-4 py-2 mt-2 text-primary bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                            </div>
                            <div className="mt-4">
                                <div>
                                    <label htmlFor="password" className="block text-sm text-gray-800">Password</label>
                                    <input
                                        type="password"
                                        name='password'
                                        className="block w-full px-4 py-2 mt-2 text-primary bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                    />
                                </div>
                                <Link to="/reset" className="text-xs text-gray-600 hover:underline">Forget Password?</Link>
                                <div className="mt-6">
                                    <input type="submit" value="Login" className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-neutral rounded-md hover:bg-black focus:outline-none focus:bg-secondary cursor-pointer" />
                                </div>
                            </div>
                        </form>
                        <p className="mt-8 text-xs text-center text-gray-700"> Don't have an account? <Link to="/signup"
                            className="font-medium text-secondary hover:underline">Sign up</Link></p>
                    </div>
                </div>
                <div className="divider lg:w-1/2 w-full mx-auto">OR</div>
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
                    type="submit"
                    onClick={handleSignInWithGoogle}
                >
                    <i className="fa fa-google mr-2" aria-hidden="true"></i>
                    Continue with google
                </button>
            </div>
        </div>
        </div>
    );
};

export default Login;
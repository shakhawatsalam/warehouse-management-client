import React, { useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import google from '../../Images/google.png'
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import './Login.css';


const Login = () => {
    const [email, setEamil] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const [signInWithGoogle, googleuser, googleLoading, googlError] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth, { updatePassword: false });
    const [sendPasswordResetEmail, sending, ResetError] = useSendPasswordResetEmail(
        auth
    );
    let from = location.state?.from?.pathname || "/";
    console.log(error);
    console.log(googleuser?.user?.email);
    let errorElement;
    if (error) {
        errorElement = <p className='text-danger'>Error : {error?.message} {googlError?.message}</p>

    }
    let googleerrorElement;
    if (googlError) {
        googleerrorElement = <p className='text-danger'>Error :  {googlError?.message}</p>

    }
    if (loading || googleLoading) {
        return <Loading></Loading>
    }
    //handle login from
    const handleLoginFrom = async event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;


        await signInWithEmailAndPassword(email, password);
        const url = `http://localhost:5000/login`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify({email})
        })
            .then(res => res.json())
            .then(data => {
                localStorage.setItem('accessToken', data.accessToken);
                
            });
    }
    if (googleuser) {
        navigate(from, { replace: true })
    }
    if (user) {
        navigate(from, { replace: true });
    }
    // google sing in
     
        
    const googleSingin = async () => {
        await signInWithGoogle();
        console.log(googleuser);
        // const url = `http://localhost:5000/login`;
        
        // fetch(url, {
        //     method: 'POST',
        //     headers: {
        //         'content-type': "application/json"
        //     },
        //     body: JSON.stringify({email})
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         localStorage.setItem('accessToken', data.accessToken);
        //         navigate(from, { replace: true });
        //     });

    }

    //forgot password 
    const forgotPassword = async () => {
        console.log(ResetError);
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        } else {
            toast('Please Enter Your Email Address');
        }


    }

    return (
        <div className='height'>
            <div className='d-flex justify-content-center items-center w-50 mx-auto p-5 mt-5 my-class shadow-lg'>
                <div className='register w-100'>
                    <form onSubmit={handleLoginFrom}>
                        <h1 className='text-center'><span>Please</span> Login</h1>
                        <label className='fs-3' htmlFor="email">Email</label>
                        <input className='d-block p-2 w-100 mb-3' type="email" name="email" id="" placeholder='Your email' required />
                        <label className='fs-3' htmlFor="password">Password</label>
                        <input className='d-block p-2 w-100' type="password" name="password" id="" placeholder='password' required />
                        <p className='mt-2 '>Please Register<Link className='text-decoration-none' to='/register'> <span>Register</span></Link></p>
                        <p className='mt-2'><Link className='text-decoration-none' to='' onClick={forgotPassword}> <span>forgot Password</span></Link></p>
                        {errorElement}
                        {googleerrorElement}
                        <input className='btn btn-danger mt-2 shadow' type="submit" value="Login" />
                        <button onClick={() => googleSingin()} className='d-block btn mt-2 border w-50 mx-auto'><img src={google} alt="" /> Singin with Google</button>
                    </form>
                </div>



            </div>
            
        </div>
    );
};

export default Login;
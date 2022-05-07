import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification } from 'react-firebase-hooks/auth';
import './Register.css';
import Loading from '../Loading/Loading';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [sendEmailVerification, sending, SendEmailError] = useSendEmailVerification(
        auth
    );
    const navigate = useNavigate()
    

    const handleSubmitFrom = event => {
        event.preventDefault()
        const email = event.target.email.value;
        const password = event.target.password.value;

        sendEmailVerification(email);
        createUserWithEmailAndPassword(email, password);
    }
    if (loading) {
        return <Loading></Loading>
    }
    if (user) {
        navigate('/home')
    }
    return (
        <div className='d-flex justify-content-center items-center w-50 mx-auto p-5 mt-5 my-class shadow-lg'>
            <div className='register w-100'>
                <form onSubmit={handleSubmitFrom}>
                    <h1 className='text-center'><span>Please</span> Register</h1>
                    <label className='fs-3' htmlFor="name">Name</label>
                    <input className='d-block p-2 w-100' type="text" name="name" id="" placeholder='Your Name' />
                    <label className='fs-3' htmlFor="email">Email</label>
                    <input className='d-block p-2 w-100 mb-3' type="email" name="email" id="" placeholder='Your email' required />
                    <label className='fs-3' htmlFor="password">Password</label>
                    <input className='d-block p-2 w-100' type="password" name="password" id="" placeholder='password' required />
                    <p className='mt-2'>Already have an account<Link to='/login'> <span>Login</span></Link></p>
                    <input className='btn btn-danger mt-2 shadow' type="submit" value="Register" />
                </form>
           </div>
            

           
        </div>
    );
};

export default Register;
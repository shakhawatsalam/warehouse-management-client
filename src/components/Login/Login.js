import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../Loading/Loading';

const Login = () => {
    const [email, setEamil] = useState('');
    const navigate = use
    return (
        <div>
            <div className='d-flex justify-content-center items-center w-50 mx-auto p-5 mt-5 my-class shadow-lg'>
                <div className='register w-100'>
                    <form>
                        <h1 className='text-center'><span>Please</span> Login</h1>
                        <label className='fs-3' htmlFor="email">Email</label>
                        <input className='d-block p-2 w-100 mb-3' type="email" name="email" id="" placeholder='Your email' required />
                        <label className='fs-3' htmlFor="password">Password</label>
                        <input className='d-block p-2 w-100' type="password" name="password" id="" placeholder='password' required />
                        <p className='mt-2'>Please Register<Link to='/register'> <span>Register</span></Link></p>
                        <input className='btn btn-danger mt-2 shadow' type="submit" value="Register" />
                    </form>
                </div>



            </div>
        </div>
    );
};

export default Login;
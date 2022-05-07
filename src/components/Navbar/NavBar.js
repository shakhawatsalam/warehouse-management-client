import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import './NavBar.css';

const NavBar = () => {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();


    // sing out 
    const singOut = () => {
        signOut(auth);
        navigate('/');

    };
    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">PC <span>Build</span></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Features</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Pricing</Link>
                            </li>
                        </ul>
                        {user ?
                            <span onClick={singOut} className="navbar-text text-danger fw-bolder cursor">
                                Sing Out
                            </span> :
                            <span className="navbar-text text-danger fw-bolder">
                                <Link className='text-danger fw-bolder text-decoration-none' to='/login'>Sing IN</Link>
                            </span>}
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default NavBar;
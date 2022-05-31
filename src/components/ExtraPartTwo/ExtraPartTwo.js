import React from 'react';
import './ExtraPartTwo.css'

const ExtraPartTwo = () => {
    return (
        <div>
            <h1 className='text-center'><span>Contact</span> With Us</h1>
            <form>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1"/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Your Massage</label>
                <textarea type="password" className="form-control" id="exampleInputPassword1"/>
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" className="btn btn-danger">Submit</button>
        </form>
        </div>
    );
};

export default ExtraPartTwo;
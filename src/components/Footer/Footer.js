import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <div className='footer'>
                <h5 className='text text-center'>© 2022 Copyright</h5>
                <h4 className='text text-center'><span>Build</span> Your Dream Pc</h4>
                <form className='sub d-flex align-items-center  justify-content-center'>
                <label htmlFor="restock">Restock</label>
                <input className='' type="text" name="restock" id="" />
                <input className='ms-2 btn btn-danger' type="submit" value="Subscribe" />
            </form>
            </div>
            
           
        </div>
    );
};

export default Footer;
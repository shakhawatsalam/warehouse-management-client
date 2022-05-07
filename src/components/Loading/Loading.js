import React from 'react';
import './Loading.css'

const Loading = () => {
    return (
          <div className='d-flex justify-content-center align-items-center loading w-50 mx-auto mt-5'>
            <div className="spinner-border text-danger" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default Loading;
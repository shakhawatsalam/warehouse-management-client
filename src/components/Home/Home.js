import React from 'react';
import Items from '../Items/Items';

const Home = () => {
    return (
        <div className='container'>
            <div className='d-flex justify-content-between align-items-center'>
                <div className='title-section'>
                    <h1><span>Pc</span> Build Bangaldens</h1>
                    <p>Technology has become a part of our daily lives and for a huge portion of our life, we are dependent on tech products daily. There is hardly a home in Bangladesh without a tech product. This is where we come in. Star Tech & Engineering Ltd had started as a Tech product shop way back in March 2007. We focused on giving the customers the best service possible.</p>
                </div>
                <div className='img-section'>
                    <img src="https://www.startech.com.bd/image/cache/catalog/desktop-pc/gaming-pc/intel/core-i9-11900k-gaming-pc-500x500.png" alt="#" />
                </div>


            </div>
            <Items></Items>
        </div>
    );
};

export default Home;
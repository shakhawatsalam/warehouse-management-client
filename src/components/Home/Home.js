import React from 'react';
import ExtraPartOne from '../ExtraPartOne/ExtraPartOne';
import ExtraPartTwo from '../ExtraPartTwo/ExtraPartTwo';
import Items from '../Items/Items';
import './Home.css'

const Home = () => {
    return (
        <div className='container '>
            <div className='header'>
                <div className='title-section mt-4'>
                    <h1><span>Pc</span> Build Bangaldens</h1>
                    <p>Technology has become a part of our daily lives and for a huge portion of our life, we are dependent on tech products daily. There is hardly a home in Bangladesh without a tech product. This is where we come in. Star Tech & Engineering Ltd had started as a Tech product shop way back in March 2007. We focused on giving the customers the best service possible.</p>
                </div>
                <div className='img-section'>
                    <img src="https://www.startech.com.bd/image/cache/catalog/desktop-pc/gaming-pc/intel/core-i9-11900k-gaming-pc-500x500.png" alt="#" />
                </div>


            </div>
            <Items></Items>
            <ExtraPartTwo></ExtraPartTwo>
            <ExtraPartOne></ExtraPartOne>            
        </div>
    );
};

export default Home;
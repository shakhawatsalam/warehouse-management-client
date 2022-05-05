import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Inventory.css';

const Inventory = () => {
    const { id } = useParams();
    const [data, setData] = useState({});
    // console.log(data);

    // console.log(id);

    useEffect(() => {
        const url = `http://localhost:5000/items/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setData(data));
        // console.log(data);
    }, []);
    const handleDeliverButton = (quantity) => {
        const oldQuantity = parseInt(quantity);
        console.log(typeof(oldQuantity ));
    }
    return (
        <div className='container'>
            <div className='inventory-details d-flex justify-content-between align-items-center mt-5'>
                <div className='img'>
                    <img src={data.img} alt="" />
                </div>
                <div className='details'>
                    <h3>Name : {data.name}</h3>
                    <p>{data.description}</p>
                    <h4>Price: {data.price}</h4>
                    <h4>Quantity: {data.quantity}</h4>
                    <h4>Quantity: {data.supplier_name}</h4>
                    <button onClick={() => handleDeliverButton(data.quantity)} className='btn btn-secondary mt-'>Delivered</button>
                </div>
            </div>

        </div>
    );
};

export default Inventory;
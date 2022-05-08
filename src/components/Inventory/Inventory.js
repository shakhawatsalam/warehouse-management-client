import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Inventory.css';

const Inventory = () => {
    const { id } = useParams();
    const [data, setData] = useState({ quantity: '' });


    useEffect(() => {
        const url = `https://blooming-brook-94893.herokuapp.com/items/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setData(data));
    }, [id]);
    //DELIVER BUTTON 
    const number = parseInt(data.quantity);
    const { quantity, ...rest } = data;
    const handleDeliverButton = () => {
        const newQuantity = number - 1;
        const data = {
            quantity: newQuantity
        }
        const url = `https://blooming-brook-94893.herokuapp.com/items/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                setData({ quantity: newQuantity, ...rest });
            })
    }

    // RESTOCK FROM 
    const oldQuantity = parseInt(data.quantity);
    const handleStock = event => {
        event.preventDefault();
        let inputNumber = parseInt(event.target.restock.value);

        if (!isNaN(inputNumber)) {
            const quantity = inputNumber + oldQuantity;
            const data = { quantity };
            const url = `https://blooming-brook-94893.herokuapp.com/items/${id}`
            fetch(url, {
                method: "PUT",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(data => {
                    setData({ quantity: quantity, ...rest });
                    event.target.reset('')
                })
        }
    }

    return (
        <div>
            <div className='container'>
                <div className='inventory-details mt-5'>
                    <div className='img-container'>
                        <div className='img'>
                            <img src={data?.img} alt="" />
                        </div>
                    </div>
                    <div className='details'>
                        <h3>Name : {data?.name}</h3>
                        <p>{data?.description}</p>
                        <h4>Price: ${data?.price}</h4>
                        <h4>Quantity: {data?.quantity}</h4>
                        <h4>Quantity: {data?.supplier_name}</h4>
                        {data.quantity > 0 ?
                            <button onClick={handleDeliverButton} className='btn btn-secondary mt-'>Delivered</button> :
                            <button onClick={handleDeliverButton} className='btn btn-danger mt-' disabled>Stock Out</button>
                        }

                    </div>
                </div>
                <form onSubmit={handleStock} className='d-flex align-items-center mt-5 justify-content-center flex-column'>
                    <label htmlFor="restock">Restock</label>
                    <input className='' type="text" name="restock" id="" />
                    <input className='mt-3 btn btn-primary' type="submit" value="Restock" />
                </form>


            </div>

        </div>
    );
};

export default Inventory;
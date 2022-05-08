import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Item.css'
const Item = ({ item }) => {
    const { name, img, _id, description, price, quantity, supplier_name
    } = item;
    const navigate = useNavigate();

    const navigateToItems = id => {
        navigate(`/inventory/${id}`)
    }

    return (

        <div className="col-12 col-md-6 col-lg-4">
            <div className="card h-100">

                <img src={img} className="card-img-top" alt="..." />

                <div className="card-body">
                    <h4 className="card-title">{name}</h4>
                    <h4>Price :${price}</h4>
                    <h4>Quantity : {quantity}</h4>
                    <h5>Supplier Name : {supplier_name
                    }</h5>

                    <p className="card-text">{description}</p>
                    <div className='d-flex justify-content-between'>
                        <button onClick={() => navigateToItems(_id)} className='btn btn-dark'>Update</button>
                        <button onClick={() => navigate('/manageInventories')} className='btn btn-danger'>Manage Inventories</button>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default Item;
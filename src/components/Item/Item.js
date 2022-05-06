import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Item = ({ item }) => {
    const { name, img, _id, } = item;
    const navigate = useNavigate();

    const navigateToItems = id => {
        navigate(`/inventory/${id}`)
    }

    return (

        <div className="col-12 col-md-6 col-lg-4">
            <div className="card h-100">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h3 className="card-title">{name}</h3>
                    <h4>Price :</h4>
                    <h4>Quantity :</h4>
                    <h5>Supplier Name : intel</h5>

                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
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
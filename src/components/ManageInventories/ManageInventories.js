import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ManageInventories = () => {
    const navigate = useNavigate()
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/items')
            .then(res => res.json())
            .then(data => setItems(data))

    }, []);
    const navagateToAddItems = () => {
        navigate('/addNewItem')
    }
    return (
        <div>
            <h1 className='text-center mt-5'><span>Manage</span> inventories</h1>
            <div className='d-flex justify-content-center'>
                <button onClick={navagateToAddItems} className='btn btn-dark'>Add New Items</button>
            </div>
            <table className="table container">
                <thead>


                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items?.map(item => <tr key={item._id}>

                            <td>{item.name}</td>
                            <td>${item.price}</td>
                            <td>{item.quantity}</td>
                            <td><button className='btn btn-danger'>delete</button></td>
                        </tr>
                        )
                    }


                </tbody>
            </table>
        </div>
    );
};

export default ManageInventories;
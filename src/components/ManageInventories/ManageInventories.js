import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ManageInventories = () => {
    const navigate = useNavigate()
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://blooming-brook-94893.herokuapp.com/items')
            .then(res => res.json())
            .then(data => setItems(data))

    }, []);
    const navagateToAddItems = () => {
        navigate('/addNewItem')
    }
    //Delete Handler
    const deleteHandler = id => {

        const proceed = window.confirm('Do you Want to Delete');
        if (proceed) {
            const url = `https://blooming-brook-94893.herokuapp.com/items/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {

                    const remaning = items?.filter(items => items?._id !== id);
                    setItems(remaning);
                })
        }
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
                            <td><button onClick={() => deleteHandler(item._id)} className='btn btn-danger'>delete</button></td>
                        </tr>
                        )
                    }


                </tbody>
            </table>
        </div>
    );
};

export default ManageInventories;
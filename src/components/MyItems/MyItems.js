import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [items, setItems] = useState([]);


    useEffect(() => {
        const email = user?.email;
        const url = `http://localhost:5000/myitems?email=${email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setItems(data))
        
    }, [user]);
    return (
        <div>
            <h1 className='text-center mt-5'><span>My</span> Items</h1>
            <div className='d-flex justify-content-center'>
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

export default MyItems;
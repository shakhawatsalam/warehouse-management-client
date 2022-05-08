import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [items, setItems] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        const email = user?.email;
        const url = `https://blooming-brook-94893.herokuapp.com/myitems?email=${email}`
        try {
            fetch(url, {
                method: 'GET',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data?.length) {
                        setItems(data);
                    } else if (data.error) {
                        signOut(auth);
                        navigate('/login');
                    }
                });
        }
        catch (error) {
            // console.log(error);
            // if (error.response.status === 401 || error.response.status === 403) {

            // }
        }

    });

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
                        items?.map(item => <tr key={item?._id}>

                            <td>{item?.name}</td>
                            <td>${item?.price}</td>
                            <td>{item?.quantity}</td>
                            <td><button onClick={() => deleteHandler(item._id)} className='btn btn-danger'>delete</button></td>
                        </tr>
                        )
                    }


                </tbody>
            </table>
        </div>
    );
};

export default MyItems;
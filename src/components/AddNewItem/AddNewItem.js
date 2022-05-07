import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AddNewItem = () => {
    const [user, loading, error] = useAuthState(auth);


    // submiting from
    const handleAddItems = event => {
        event.preventDefault();
        const order = {
            email: user.email,
            name: event.target.name.value,
            price: event.target.price.value,
            quantity: event.target.quantity.value,
            supplier_name: event.target.supplier_name.value,
            description: event.target.description.value,
            img: event.target.img.value

        }
        const url = `http://localhost:5000/items`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            });
        event.target.reset('')
    }
    return (
        <div>
            <div className='d-flex justify-content-center items-center w-50 mx-auto p-5 mt-5 my-class shadow-lg'>
                <div className='register w-100'>
                    <form onSubmit={handleAddItems}>
                        <h1 className='text-center'><span>Add</span> New Items</h1>
                        <label className='fs-3' htmlFor="email">Name</label>
                        <input className='d-block p-2 w-100 mb-3' type="name" name="name" id="" placeholder='name' required />
                        <label className='fs-3' htmlFor="price">Price</label>
                        <input className='d-block p-2 w-100' type="number" name="price" id="" placeholder='price' required />
                        <label className='fs-3' htmlFor="quantity">Quantity</label>
                        <input className='d-block p-2 w-100' type="text" name="quantity" id="" placeholder='quantity' required />
                        <label className='fs-3' htmlFor="supplier_name">Supplier Name</label>
                        <input className='d-block p-2 w-100' type="text" name="supplier_name" id="" placeholder='supplier name' required />
                        <label className='fs-3' htmlFor="description">Description</label>
                        <textarea className='d-block p-2 w-100' type="text" name="description" id="" placeholder='description' required />
                        <label className='fs-3' htmlFor="img">Image</label>
                        <input className='d-block p-2 w-100' type="url" name="img" id="" placeholder='image url' required />
                        <input className='btn btn-danger mt-2 shadow' type="submit" value="Add Items" />
                    </form>
                </div>



            </div>

        </div>
    );
};

export default AddNewItem;
import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';

const Items = () => {
    const [items, setItems] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/items')
            .then(res => res.json())
            .then(data => setItems(data));
    }, []);
    return (
        <div>
            <h1 className='text-center'><span>Inventory</span> Items</h1>

            <div className="row row-cols-1 row-cols-md-3 g-4 mt-5 mb-5">
                {
                    items?.map(item => <Item
                    
                        item={item}
                        key = {item._id}
                    
                    ></Item>)
                }
            </div>
        </div>
    );
};

export default Items;
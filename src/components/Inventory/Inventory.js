import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Inventory = () => {
    const { id } = useParams();
    const [data, setData] = useState({});
    // console.log(data);

    console.log(id);

    useEffect(() => {
        const url = `http://localhost:5000/items/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setData(data));
    }, []);
    return (
        <div>
            <h1>Name : {data.name}</h1>
        </div>
    );
};

export default Inventory;
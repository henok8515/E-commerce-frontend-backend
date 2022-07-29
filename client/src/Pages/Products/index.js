import React, { useEffect, useState } from 'react';
import Product from './Product';

function Products() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then((res) => res.json())
            .then((res) => setData(res.products));
    }, []);

    return (
        <div>
            {/* {data.map((data) => (
                <div className="flex">
                    <span>{data.id}</span> <p>{data.brand}</p>
                </div>
            ))} */}
            <Product />
        </div>
    );
}

export default Products;

import React, { useEffect, useState } from 'react'
import '../Banner/Banner.css'
import ModalBox from '../Modalbox/ModalBox';

const Banner = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch data once when the component mounts
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((json) => {
                setData(json);
                setLoading(false);
            })
            .catch((err) => {
                setError('Failed to load products');
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h1 className='title'>Product List</h1>
            <ul>
                {data.length > 0 ? (
                    data.map((product) => (
                        <div className='product-card' key={product.id}>
                            <div className='product-card-img'>
                                <img src={product.image} alt={product.title} width={100} />
                            </div>
                            <div className='cardDetails'>
                                <h4>Category: {product.category}</h4>
                                <h2>{product.title}</h2>
                                <h3>Price: {product.price}/-</h3>
                                <div className='card-btn'>
                                    <ModalBox description={product.description} rating={product.rating.rate} title={product.title}/>
                                </div>
                            </div>

                        </div>
                    ))
                ) : (
                    <p>No products available.</p>
                )}
            </ul>
        </div>
    );
}

export default Banner;

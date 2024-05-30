// src/components/ProductList.js

import React, { useEffect, useState } from 'react';
import { fetchInventory } from '../api';

const ProductList = ({ onSelectProduct }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const loadProducts = async () => {
            try {
                const data = await fetchInventory();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        loadProducts();
    }, []);

    return (
        <div>
            <h2>Lista de Productos</h2>
            <ul>
                {products.map(product => (
                    <li key={product.id} onClick={() => onSelectProduct(product)}>
                        {product.name} - {product.quantity} disponibles
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;

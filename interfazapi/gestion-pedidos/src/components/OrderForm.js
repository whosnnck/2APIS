// src/components/OrderForm.js

import React, { useState } from 'react';

const OrderForm = ({ onPlaceOrder }) => {
    const [productId, setProductId] = useState('');
    const [quantity, setQuantity] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onPlaceOrder(productId, quantity);
    };

    return (
        <div>
            <h2>Realizar Pedido</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    ID del Producto:
                    <input
                        type="text"
                        value={productId}
                        onChange={(e) => setProductId(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Cantidad:
                    <input
                        type="number"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        required
                    />
                </label>
                <button type="submit">Realizar Pedido</button>
            </form>
        </div>
    );
};

export default OrderForm;

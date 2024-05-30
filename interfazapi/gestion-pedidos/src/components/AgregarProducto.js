import React, { useState } from 'react';
import axios from 'axios';

function AddProduct() {
  const [product, setProduct] = useState({
    name: '',
    quantity: 0,
    price: 0,
    available: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProduct({
      ...product,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/inventory/update', product);
      console.log('Product added:', response.data);
      // Clear form
      setProduct({
        name: '',
        quantity: 0,
        price: 0,
        available: false
      });
    } catch (error) {
      console.error('Error adding product:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={product.name} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Quantity:
          <input type="number" name="quantity" value={product.quantity} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Price:
          <input type="number" name="price" value={product.price} onChange={handleChange} step="0.01" required />
        </label>
        <br />
        <label>
          Available:
          <input type="checkbox" name="available" checked={product.available} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default AddProduct;

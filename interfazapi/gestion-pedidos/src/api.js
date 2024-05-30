// src/api.js

const API_BASE_URL = 'http://localhost:3000/api/'; // Reemplaza con la URL de tu API

export const fetchInventory = async () => {
    const response = await fetch(`${API_BASE_URL}/inventory`);
    if (!response.ok) {
        throw new Error('Failed to fetch inventory');
    }
    return response.json();
};

export const updateInventory = async (productId, quantity) => {
    const response = await fetch(`${API_BASE_URL}/inventory/${productId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ quantity }),
    });
    if (!response.ok) {
        throw new Error('Failed to update inventory');
    }
    return response.json();
};

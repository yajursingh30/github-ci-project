const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Product catalogue
const products = [
    {
        id: 1,
        name: 'Wireless Headphones',
        price: 1499,
        category: 'Electronics',
        emoji: '🎧'
    },
    {
        id: 2,
        name: 'Smart Watch',
        price: 2499,
        category: 'Electronics',
        emoji: '⌚'
    },
    {
        id: 3,
        name: 'Running Shoes',
        price: 1999,
        category: 'Fashion',
        emoji: '👟'
    },
    {
        id: 4,
        name: 'Backpack',
        price: 999,
        category: 'Accessories',
        emoji: '🎒'
    },
    {
        id: 5,
        name: 'Bluetooth Speaker',
        price: 1799,
        category: 'Electronics',
        emoji: '🔊'
    },
    {
        id: 6,
        name: 'Sunglasses',
        price: 799,
        category: 'Fashion',
        emoji: '🕶️'
    }
];

// API: Get all products
app.get('/api/products', (req, res) => {
    res.json(products);
});

// API: Get a single product
app.get('/api/products/:id', (req, res) => {
    const product = products.find(
        item => item.id === Number(req.params.id)
    );

    if (!product) {
        return res.status(404).json({
            message: 'Product not found'
        });
    }

    res.json(product);
});

// Health check with application version
app.get('/api/health', (req, res) => {
    res.json({
        status: 'OK',
        application: 'ShopEasy Lite',
        version: process.env.APP_VERSION || 'local'
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`ShopEasy Lite running on port ${PORT}`);
});
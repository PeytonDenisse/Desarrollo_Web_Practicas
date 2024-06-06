const express = require('express');
const app = express();
const port = 3000;
const URL = "https://fakestoreapi.com/products/"; // endpoint

app.get('/', async (req, res) => {
    try {
        const fetch = await import('node-fetch');
        const response = await fetch.default(URL);
        const productosObtenidos = await response.json();

        let htmlContent = '<table border="1" width="100%">';
        productosObtenidos.forEach((producto) => {
            htmlContent += `
            <tr>
                <td>${producto.title}</td>
                <td>$${producto.price}</td>
                <td><img src="${producto.image}" alt="${producto.title}" width="50" height="50"></td>
            </tr>`;
        });
        htmlContent += '</table>';
        res.send(htmlContent);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).send('Error fetching products');
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

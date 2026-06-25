body {
    font-family: Arial, sans-serif;
    text-align: center;
    background-color: #f4f4f4;
}

h1 {
    color: #333;
    margin: 20px;
}

.products {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
    padding: 20px;
}

.product {
    background: white;
    border-radius: 10px;
    padding: 20px;
    width: 200px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.product img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: 8px;
}

.product h2 {
    font-size: 18px;
    margin: 10px 0;
}

.product p {
    color: #e44d26;
    font-weight: bold;
    font-size: 16px;
}

.product button {
    background-color: #28a745;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
}

.product button:hover {
    background-color: #218838;
}

.cart {
    background: white;
    margin: 20px auto;
    padding: 20px;
    width: 400px;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.cart ul {
    list-style: none;
    padding: 0;
}

.cart ul li {
    padding: 8px;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
}

.cart button {
    background-color: #28a745;
    color: white;
    border: none;
    padding: 10px 30px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    margin-top: 10px;
}

.cart button:hover {
    background-color: #218838;
}
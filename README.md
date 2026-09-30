# Express Product API with Caching

## Overview

This project is a simple Product REST API built using Node.js and Express.js.

The application follows a modular architecture:

Route → Middleware → Controller → Service → Database

The project also implements an in-memory caching system for product GET requests.

## Features

- Get all products
- Get a product by ID
- Create a new product
- Update a product using PUT
- Partially update a product using PATCH
- Delete a product
- In-memory caching
- Cache HIT and MISS headers
- 1-minute cache expiration (TTL)
- Cache invalidation after data modification
- Error handling
- Modular folder structure

## Project Structure

```text
Express project/
│
├── controllers/
│   └── productController.js
│
├── database/
│   └── productDatabase.js
│
├── middleware/
│   └── cache.js
│
├── routes/
│   └── productRoutes.js
│
├── services/
│   └── productService.js
│
├── app.js
├── package.json
├── package-lock.json
└── README.md
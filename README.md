# Simple CRUD App Backend

## Overview

This project is a simple backend application for managing products in a database. It provides basic CRUD (Create, Read, Update, Delete) operations through a RESTful API built with Node.js, Express, and MongoDB. The application is designed to handle requests for adding, retrieving, updating, and deleting product information.

## Technologies Used

- **Node.js**: JavaScript runtime environment.
- **Express**: Web framework for Node.js.
- **MongoDB**: NoSQL database for storing product data.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js.
- **Nodemon**: Utility that monitors for changes in the source code and automatically restarts the server.

## Project Structure

The project is organized as follows:

```
├── models/
│   └── product.model.js   # Mongoose model for Product
├── controllers/
│   └── product.controller.js  # CRUD operations for Product
├── routes/
│   └── product.route.js    # API routes for Product
├── index.js                # Entry point of the application
├── package.json            # Project metadata and dependencies
└── README.md               # Project documentation
```

## API Endpoints

The backend exposes the following API endpoints:

- **GET /api/products**: Retrieve all products.
- **GET /api/products/:id**: Retrieve a single product by its ID.
- **POST /api/products**: Create a new product.
- **PUT /api/products/:id**: Update an existing product by its ID.
- **DELETE /api/products/:id**: Delete a product by its ID.

## Installation and Setup

To set up and run this project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/simple-crud-app-backend.git
   cd simple-crud-app-backend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up MongoDB**:
   - Ensure you have MongoDB installed and running on your machine, or use a cloud MongoDB service like MongoDB Atlas.
   - Update the MongoDB connection string in `index.js` if necessary.

4. **Run the application**:
   - For development:
     ```bash
     npm run dev
     ```
   - For production:
     ```bash
     npm run serve
     ```

5. **Test the API**:
   - Use a tool like Postman or cURL to send requests to the API endpoints.

## Example Product Schema

The product data is stored in MongoDB using the following schema:

```javascript
const ProductSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter product name"]
    },
    quantity: {
        type: Number,
        required: true,
        default: 0
    },
    image: {
        type: String,
        required: false
    },
}, {
    timestamps: true
});
```

## Example API Requests

- **Create a new product**:
  ```json
  POST /api/products
  {
      "name": "cookie",
      "quantity": 25,
      "image": "https://example.com/image.jpg"
  }
  ```

- **Update a product**:
  ```json
  PUT /api/products/:id
  {
      "name": "updated cookie",
      "quantity": 30
  }
  ```

- **Delete a product**:
  ```json
  DELETE /api/products/:id
  ```

## Dependencies

- **Express**: Fast, unopinionated, minimalist web framework for Node.js.
- **Mongoose**: Elegant MongoDB object modeling for Node.js.
- **Nodemon**: Simple monitor script for use during development.

## License

This project is licensed under the ISC License. See the [LICENSE](LICENSE) file for details.

---

This README provides a comprehensive overview of your simple CRUD backend application, including how to install, set up, and use the API.

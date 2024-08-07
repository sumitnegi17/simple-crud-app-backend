const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const productRoute = require('./routes/product.route.js');

app.use(express.json()); //middleware


app.use('/api/products', productRoute);


mongoose.connect('mongodb+srv://sumitnegi1706:yILW7DUlXYaMmoI2@backend.4yssn.mongodb.net/node-api?retryWrites=true&w=majority&appName=backend')
    .then(() => {
        console.log('Connected!');


        app.listen(3000, () => {
            console.log("server is running");
        });
    });




app.get('/', (req, res) => {
    res.send("hello from node api server ds");
});




//create databsase items get method , req , using json
/*{
    "name": "cookie",
    "quantity": 25
 }

app.post('/api/products', async(req, res) => {
    try {
        const product = await Product.create(req.body); //save the product 
        res.status(201).json(product);
    } catch (error) {

        res.status(500).json({ message: error.message });
    }

});
//get all the prodcuts from database
//localhost:3000/api/products/
app.get('/api/products', async(req, res) => {
    try {
        const products = await Product.find({}); // find the prodcuts
        res.status(200).json(products);

    } catch (error) {
        res.status(500).json({ message: error.message });

    }
})

//get product byt id 
//localhost:3000/api/product/66b3117db52b702da8bb128f
app.get('/api/product/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const products = await Product.findById(id);
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

//update a product 
app.put('/api/product/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        if (!product) {
            return res.status(404).json({ message: "product not found" });
        }
        const updatedproduct = await Product.findById(id);
        res.status(200).json(updatedproduct);


    } catch {
        res.status(500).json({ message: error.message });
    }
});

//delete a product
//localhost:3000/api/products/66b3117db52b702da8bb128f
app.delete('/api/products/:id', async(req, res) => {
    try {
        const { id } = req.params
        const product = await Product.findByIdAndDelete(id);
        if (!product) {
            return res.status(404).json({ message: "product not found" });
        }
        res.status(200).json({ message: "product deleted succesfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });


    }
});
*/
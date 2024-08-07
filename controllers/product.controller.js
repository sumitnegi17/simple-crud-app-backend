const Product = require('../models/product.model.js')

const getProducts = async(req, res) => {
    try {
        const products = await Product.find({}); // find the prodcuts
        res.status(200).json(products);

    } catch (error) {
        res.status(500).json({ message: error.message });

    }

}
const getProduct = async(req, res) => {
    try {
        const { id } = req.params;
        const products = await Product.findById(id);
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

}
const createproduct = async(req, res) => {

    try {
        const product = await Product.create(req.body); //save the product 
        res.status(201).json(product);
    } catch (error) {

        res.status(500).json({ message: error.message });
    }
}

const updateproduct = async(req, res) => {
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
}
const deleteproduct = async(req, res) => {
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

}

module.exports = {
    getProducts,
    getProduct,
    createproduct,
    updateproduct,
    deleteproduct
};
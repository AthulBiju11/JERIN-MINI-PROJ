import Product from "../models/product.model.js";

export const getProducts = async (req, res,next) => {
  try {
    const products = await Product.find()
    res.status(200).send(products);
  } catch (err) {
    next(err);
  }
};

export const setProducts = async (req, res, next) => {
  
  const { title, img, cat, price, attribute } = req.body;

  const newProduct = new Product({
    title: title,
    price: price,
    img: img,
    cat: cat,
    attribute: attribute,
  });

  try {
    const savedProduct = await newProduct.save();
    res.status(201).send("Product has been added");
  } catch (err) {
    next(err);
  }
};
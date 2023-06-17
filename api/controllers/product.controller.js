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
  const newProduct = new Product({
    title: "Athul Generator",
    price: 20000,
    img: "https://res.cloudinary.com/dwsuanvje/image/upload/v1687021744/MechKart/Mechkart_Backend_images/pngwing.com_q05xt4.png",
    cat: "ec",
  });

  try {
    const savedProduct = await newProduct.save();
    res.status(201).send("Product has been added");
  } catch (err) {
    next(err);
  }
};

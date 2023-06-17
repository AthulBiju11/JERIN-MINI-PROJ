import Categories from "../models/category.model.js";

export const getCategories = async (req, res,next) => {
  try {
    const categories = await Categories.find()
    res.status(200).send(categories);
  } catch (err) {
    next(err);
  }
};

export const createCategories = async (req, res, next) => {
  
    const newCategory = new Categories({
      title: "Engineering & Construction",
      
      img: "https://res.cloudinary.com/dwsuanvje/image/upload/v1687021744/MechKart/Mechkart_Backend_images/pngwing.com_q05xt4.png",
      cat: "ec",
    });

    try{
        const savedCategory = await newCategory.save();
        res.status(201).send("Category has been added");
    }catch(err){
        next(err);
    }
};

import mongoose from "mongoose";
const  {Schema} = mongoose;

const productSchema = new Schema({
    title : {
        type : String,
        required : true,
    },
    
    img : {
        type : String,
        
    },
    cat : {
        type : String,
        
    },
    price : {
        type : Number,
        required: true,
    },
});

export default mongoose.model("products",productSchema)
const mongoose = require('mongoose');


const ProductSchema = new mongoose.Schema({
    nameofthecompany: {
        type: String,
        required: true,
       
    },
    category: {
        type: [String],
        required: true,
        
    },
    addlogourl: {
        type: String,
        required: true,
    },
    linkofproduct: {
        type: String,
        required: true,

    },
    adddescription:{
        type:String,
        required:true,
    },
    upvote:{
        type:Number,
        required:true,
    },
    comments:{
        type:[String],
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Product = mongoose.model('product', ProductSchema);
module.exports = Product;
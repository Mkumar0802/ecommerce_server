const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const foodSchema = new Schema({
    name :{
        type:String,
        required:true,
        minlength:1,
       
    },
    photo:{
        type:String,
        required:true  
    },
    price:{
        type:String,
        required:true
    }
})

const Food =mongoose.model('food', foodSchema,'foodcollection');
module.exports = Food;
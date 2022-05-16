const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const plantSchema = new Schema({
    name :{
        type:String,
        required:true,
        minlength:1,
        maxlength:30
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

const Plant =mongoose.model('plant', plantSchema ,'plantcollection');
module.exports = Plant;
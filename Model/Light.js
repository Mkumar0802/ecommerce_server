const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const lightSchema = new Schema({
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

const Light =mongoose.model('light', lightSchema,'lightcollection');
module.exports = Light;
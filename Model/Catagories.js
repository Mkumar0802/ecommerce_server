const mongoose = require ('mongoose');
const Schema =mongoose.Schema;


const catagoriesSchema = new Schema({

    name : {
    type:String,
    required:true,
    minlength:1,
    maxlength:50,
    },

    cImage :{
        type:String,
        required:true,
    },
},

    {timestamps:true}

)

const catagoriesModel = mongoose.model('categories',catagoriesSchema,'categorieCollection');
module.exports = catagoriesModel;

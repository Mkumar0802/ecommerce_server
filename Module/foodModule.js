const Food = require('../Model/Food');
const Joi = require('joi');


exports.postfood = async (req,res,next)=>{
    //joi validate schema
        const schema = Joi.object({
            name: Joi.string().min(1).max(30).required(),
            photo: Joi.string().required(),
            price: Joi.string().required(),
            
    })
    // joi validate input data
    var {error} = await schema.validate(req.body);
    if(error){
        return res.status(400).send({msg:error.details[0].message})
    }
    res.send('success')
    
    ////////////////// save data in mongodb using mongoose //////////////
    const food = new Food({ 
        name: req.body.name,
        photo: req.body.photo,
        price: req.body.price,
        details: req.body.details, 
    })
    try{
    var response=await food.save();  
    res.send(response) 
    } catch(err){
    res.status(400).send(err)
    }
}


exports.getfood = async (req,res,next)=>{
    const response = await Food.find();
    res.send(response);
}
 

exports.updatefood = async (req,res,next)=>{
    const {foodId} = req.params;   // object destructure
    const response = await Briyanibucket.findByIdAndUpdate(foodId,{
        name: req.body.name,
        photo: req.body.photo,
        price: req.body.price
       
    });
    res.send(response);  
}


exports.deletefood= async (req,res,next)=>{  
    const {foodId} = req.params;   // object destructure
    const response = await Briyanibucket.findByIdAndRemove(foodId)
    res.send(response);
}
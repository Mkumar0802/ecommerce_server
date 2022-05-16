const Plant = require('../Model/Plant');
const Joi = require('joi');


exports.postplant = async (req,res,next)=>{
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
    const plant = new Plant({ 
        name: req.body.name,
        photo: req.body.photo,
        price: req.body.price,
        details: req.body.details, 
    })
    try{
    var response=await plant.save();  
    res.send(response) 
    } catch(err){
    res.status(400).send(err)
    }
}


exports.getplant = async (req,res,next)=>{
    const response = await Plant.find();
    res.send(response);
}
 

exports.updateplant = async (req,res,next)=>{
    const {plantId} = req.params;   // object destructure
    const response = await Plant.findByIdAndUpdate(plantId,{
        name: req.body.name,
        photo: req.body.photo,
        price: req.body.price
       
    });
    res.send(response);  
}


exports.deleteplant= async (req,res,next)=>{  
    const {plantId} = req.params;   // object destructure
    const response = await Plant.findByIdAndRemove(plantId)
    res.send(response);
}
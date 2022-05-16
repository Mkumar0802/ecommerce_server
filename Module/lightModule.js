const Light = require('../Model/Light');
const Joi = require('joi');


exports.postlight = async (req,res,next)=>{
    //joi validate schema
        const schema = Joi.object({
            name: Joi.string().min(1).max(100).required(),
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
    const light = new Light({ 
        name: req.body.name,
        photo: req.body.photo,
        price: req.body.price,
       
    })
    try{
    var response=await light.save();  
    res.send(response) 
    } catch(err){
    res.status(400).send(err)
    }
}


exports.getlight = async (req,res,next)=>{
    const response = await Light.find();
    res.send(response);
}
 

exports.updatelight = async (req,res,next)=>{
    const {lightId} = req.params;   // object destructure
    const response = await Light.findByIdAndUpdate(lightId,{
        name: req.body.name,
        photo: req.body.photo,
        price: req.body.price,
        
    });
    res.send(response);  
}


exports.deletelight = async (req,res,next)=>{  
    const {lightId} = req.params;   // object destructure
    const response = await Light.findByIdAndRemove(lightId)
    res.send(response);
}
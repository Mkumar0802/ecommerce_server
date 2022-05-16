const Catagories = require('../Model/Catagories')
const Joi =  require('joi')
const fs = require("fs");
const multer = require("multer")







exports.postcatagories =  async (req,res,next) =>{

    let { name } = req.body;
    let cImage = req.file.filename;
    const filePath = `../server/public/uploads/categories/${cImage}`;

    if (!name  || !cImage) {
      fs.unlink(filePath, (err) => {
        if (err) {
          console.log(err);
        }
        return res.json({ error: "All filled must be required" });
    });

    }
    
    else {
         Joi.object({
            name: Joi.string().min(1).max(30).required(),
            image: Joi.string().required(),
            
        })

    try {
        let checkCategoryExists = await Catagories.findOne({ name: name });
        if (checkCategoryExists) {
          fs.unlink(filePath, (err) => {
            if (err) {
              console.log(err);
            }
            return res.json({ error: "Category already exists" });
          });
        } else {
          let newCategory = new Catagories({
            name,
            
            cImage,
          });
          await newCategory.save((err) => {
            if (!err) {
              return res.json({ success: "Category created successfully" });
            }
          });
        }
      } catch (err) {
        console.log(err);
      }
    }
}


exports.getcatagories =  async (req,res,next) =>{

const response =await Catagories.find();
res.send(response);

}

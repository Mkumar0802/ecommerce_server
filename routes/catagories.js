var express = require('express');
var router = express.Router();
var multer = require('multer')
const catagoriesModule = require("../Module/catagoriesModule")

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public/uploads/categories");
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + "_" + file.originalname);
    },  
  });
  
  const upload = multer({ storage: storage });

router.post('/upload/single',upload.single("cImage"),catagoriesModule.postcatagories)
router.post('/upload/multiple',catagoriesModule.postcatagories)
router.get('/getall',catagoriesModule.getcatagories)

module.exports = router;
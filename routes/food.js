const express = require('express');
const router=express.Router();
const foodModule=require('../Module/foodModule');

router.post('/savefood',foodModule.postfood);
router.get('/getfood',foodModule.getfood);
router.patch('/updatefood/:foodId',foodModule.updatefood);
router.delete('/deletefood/:foodId',foodModule.deletefood);

module.exports = router;

const express = require('express');
const router=express.Router();
const plantModule = require('../Module/plantModule')

router.post('/saveplant',plantModule.postplant);
router.get('/getplant',plantModule.getplant);
router.patch('/updateplant/:plantId',plantModule.updateplant);
router.delete('/deleteplant/:plantId',plantModule.deleteplant);

module.exports = router;
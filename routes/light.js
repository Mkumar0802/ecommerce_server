const express = require('express');
const router=express.Router();
const lightModule=require('../Module/lightModule');

router.post('/savelight',lightModule.postlight);
router.get('/getlight',lightModule.getlight);
router.patch('/updatelight/:lightId',lightModule.updatelight);
router.delete('/deletelight/:lightId',lightModule.deletelight);

module.exports = router;
const express= require('express');
const rootDir =require('../utils/path');
const path=require('path');
const router=express.Router();
router.get('/',(req,res,next)=>{
 res.sendFile(path.join(rootDir,'views','home.html'));
});
module.exports=router;
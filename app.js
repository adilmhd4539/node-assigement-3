const express =require('express');
const bodyPasser=require('body-parser');
const path=require('path');
const homeRouter=require('./routes/home');
const usersRouter=require('./routes/users');
const app =express();
app.use(bodyPasser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));
app.use(homeRouter);
app.use(usersRouter);
app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'));
});
app.listen(3000);

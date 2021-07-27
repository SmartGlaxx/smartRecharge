require("dotenv").config()
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const signupRoute = require('./routes')

const app = express()

//DEPLOY NOTE 
//Heroku: mailsmartcodes@gmail.com; MongoDB Atlas: smartegbuchulem@gmail.com; Git : smartegbuchulem@gmail.com;
// %23 stands for # 
mongoose.connect('mongodb+srv://Smart:' + process.env.MY_PASSWORD + '@smartrecharge.usxo5.mongodb.net/SmartRecharge?retryWrites=true&w=majority?authSourse=yourDB&w=1',
	{useUnifiedTopology : true, useNewUrlParser : true, useFindAndModify : false})

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())


app.options("/*", function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, Content, Accept, Content-Type, Authorization, Content-Length, X-Requested-With');
  res.sendStatus(200);
});
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.use('/users', signupRoute)

app.use((req, res, next)=>{
    const error = new Error('An error occured')
    error.status = '404'
    next(error) 
})

app.use((error, req, res, next)=>{
    res.status(error.status || 500).json({
        error :{
            message:  "A system error occured"
        }
    })
})


module.exports = app
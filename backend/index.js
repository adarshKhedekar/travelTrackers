const experss = require('express');
const mongoose = require('mongoose');
const {config} = require('dotenv');
const cors = require('cors')

const userController = require('./controllers/user')
config({path: './config/config.env'})

const app = experss();
app.use(experss.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/travelTracker').then(()=>{
    console.log('connected to mongoose Succesfully!')
}).catch((err) => {
    console.log(err)
})

//users Route
app.post("/login", userController.userLogin);
app.post("/register", userController.userRegister);

app.listen(process.env.PORT, () => {
    console.log('http://localhost:5000')
})
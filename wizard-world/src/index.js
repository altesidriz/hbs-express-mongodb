const express = require("express");
const handlebars = require("express-handlebars");
const path = require("path");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

const {PORT, DB_URL} = require("./config.js");
const routes = require("./router.js");

//Init
const app = express();

//Express Configuration
app.use(express.static(path.resolve(__dirname, './public')));
app.use(express.urlencoded({extended: false}));
app.use(cookieParser())

//Handlebars Configuration
app.engine('hbs', handlebars.engine({extname: "hbs"}));
app.set('view engine', 'hbs');
app.set('views', 'src/views');

//DB Connection
async function dbConnection(){
    await mongoose.connect(DB_URL)
}

dbConnection()
    .then(()=> {
        console.log('Successfully connected to DB!');
    })
    .catch(err=>console.log('Error while connecting to DB!'));

//Routes
app.use(routes)

app.listen(PORT, ()=> console.log(`Server is listening on port: ${PORT}`));
const express=require('express');
var hbs = require("hbs");
const path = require("path");
const mysql = require("mysql2");
const doenv = require('dotenv');

var app = express();

doenv.config({
    path: "./.env",
})

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    port: 3306,
    password: process.env.DATABASE_PASS,
    database: process.env.DATABASE,
});
db.connect((err)=>{
    if (err) {
        console.log(err);
    }else {
        console.log('MySQL connection success');
    }
});

app.use(express.urlencoded({ extended:false }));

// console.log(__dirname);
const location=path.join(__dirname, "./public");
app.use(express.static(location));

app.set("view engine", "hbs");

const partialsPath = path.join(__dirname, "./views/partials");
hbs.registerPartials(partialsPath);

app.use("/", require("./routes/pages"));
app.use("/auth", require("./routes/auth"));

app.listen(5000, function(){
    console.log("Server Started @ Port 5000");
});
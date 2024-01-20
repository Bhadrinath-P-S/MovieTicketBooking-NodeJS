const express = require("express");
const router = express.Router();

router.get("/", function(req, res){
    res.render("Intro");
});

router.get("/Login", function(req, res){
    res.render("Login");
});

router.get("/Register", function(req, res){
    res.render("Register");
});

router.get("/MovieNowShowing", function(req, res){
    res.render("MovieNowShowing");
});

router.get("/ContactUs", function(req, res){
    res.render("ContactUs");
});

router.get("/Theatre", function(req, res){
    res.render("Theatre");
});

router.get("/Profile", function(req, res){
    res.render("Profile");
});

router.get("/MovieTicket", function(req, res){
    res.render("MovieTicket");
});

router.get("/Bookseat", function(req, res){
    res.render("Bookseat");
});

router.get("/PaymentPage", function(req, res){
    res.render("PaymentPage");
});

router.get("/Luca-Info", function(req, res){
    res.render("Luca-Info");
});

router.get("/How-To-Train-Your-Dragon-Info", function(req, res){
    res.render("How-To-Train-Your-Dragon-Info");
});

router.get("/Toy-Story-Info", function(req, res){
    res.render("Toy-Story-Info");
});

router.get("/The-Croods-Info", function(req, res){
    res.render("The-Croods-Info");
});

router.get("/Onward-Info", function(req, res){
    res.render("Onward-Info");
});

router.get("/Coco-Info", function(req, res){
    res.render("Coco-Info");
});

router.get("/The-Mitchells-vs-the-Machines-Info", function(req, res){
    res.render("The-Mitchells-vs-the-Machines-Info");
});

router.get("/Zootopia-Info", function(req, res){
    res.render("Zootopia-Info");
});

module.exports = router;
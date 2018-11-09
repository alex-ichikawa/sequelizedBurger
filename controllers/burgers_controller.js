let express = require("express");
// let router = express.Router();
var db = require("../models");

module.exports = function(app) {
app.get("/", function(req, res) {
    
    db.Burger.findAll({}).then ((data)=>{

        var hbsObject = {
            burgers: data
        };
        console.log("====" , hbsObject);
        res.render("index", hbsObject);
    });
});

app.get("/api/burger/test", function(req, res) {
    
    db.Burger.findAll({}).then ((data)=>{

        var hbsObject = {
            burgers: data
        };
        console.log("====" , hbsObject);
        res.json(data);
    });
});

app.post("/api/burgers", function(req, res) {
    console.log(req.body);
    db.Burger.create({
        burger_name: req.body.burger_name
    }).then (function (result) {
        res.json({id: result.insertId});
    });
});

app.put("/api/burgers/:id", function(req, res) {
    let id = req.params.id

    db.Burger.update({
        devoured: true
    }, {
        where: {
            id: id
        }
    }).then (function(data) {
        res.json(data);
    });
});
}

// module.exports = router;
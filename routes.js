'use strict'

var express = require("express");
var router = express.Router();

//GET /questions
// routes for question collection
router.get("/", function(req, res){
    res.json({
        response: "You sent me a GET request"
    })
});

//POST /questions
// routes for creating questions
router.post("/", function(req, res){
    res.json({
        response: "You sent me a POST request",
        body: req.body
    })
});

//GET /questions/:qID
// routes for specific questions
router.get("/:qID", function(req, res){
    res.json({
        response: "You sent me a GET request for ID " + req.params.qID
    })
});

//POST /questions/:qID/answers
// routes for creating an answer
router.post("/:qID/answers", function(req, res){
    res.json({
        response: "You sent me a POST request to /answers",
        questionsId: req.params.qID,
        body: req.body
    })
});

//PUT /questions/:qID/answers/:aID
// Edit a specific answer
router.put("/:qID/answer/:aID", function(req, res){
    res.json({
        response: "You sent me a POST request to /answers",
        questionId: req.params.qID,
        answerId: req.params.aID,
        body: req.body
    })
});

//DELETE /questions/:qID/answers/:aID
// Delete a specific answer
router.delete("/:qID/answer/:aID", function(req, res){
    res.json({
        response: "You sent me a DELETE request to /answers",
        questionId: req.params.qID,
        answerId: req.params.aID
    })
});

module.exports = router;
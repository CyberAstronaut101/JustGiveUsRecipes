const express = require("express");
const router = express.Router();

const https = require('https');
const request = require('request');
var axios = require('axios');

// /api/yelp/location
const yelpAPI = "https://api.yelp.com/v3"

// Dont worry, this is testing and the final key is not this one ;)

// request.headers.authorization = yelpAPI;

router.get("/location", (req, res, next) => {
    console.log("GET @ api/yelp/location");

    console.log(req.query); // req.params are only for POST reuqests

    // https.get("")
    // MAKE API call to Yelp Fusion
    // https.get()

    // Construct the Yelp Fusion URL

    yelpQuery = yelpAPI + "/businesses/search?latitude=" + req.query.latitude + "&longitude=" + req.query.longitude;

    console.log(yelpQuery);
    request(yelpQuery, { 'auth': { "bearer": yelpAPIKey}}, (req, res, body) => {
        console.log(body);

    })

    // axios.get(yelpQuery)
    //     .then(yelpData => {
    //         console.log("RET from YELP");
    //         console.log(yelpData);
    //     })

    res.status(200);
})




module.exports = router;
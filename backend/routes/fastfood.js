const express = require("express");
const router = express.Router();

const https = require('https');
const request = require('request');
var axios = require('axios');
const { bindCallback } = require("rxjs");

// TODO need to see if there is a way to just import this from the app.js
config_data = require('./config/config.development.json');

const yelpApiKey = config_data.yelpApiKey;
const placesApiKey = config_data.placesApiKey;

const yelpApi = "https://api.yelp.com/v3";
// Google Places API


// Must add 
const placesApi = "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?";

// https://maps.googleapis.com/maps/api/place/findplacefromtext/json?parameters

/*
    https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Museum%20of%20Contemporary%20Art%20Australia&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&key=YOUR_API_KEY

    https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=mongolian%20grill&inputtype=textquery&fields=photos,formatted_address,name,opening_hours,rating&locationbias=circle:2000@47.6918452,-122.2226413&key=YOUR_API_KEY

    https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=%2B61293744000&inputtype=phonenumber&fields=place_id&key=YOUR_API_KEY

*/

// Places key
// AIzaSyBd2EKDXbTpIKI2fSiwRw8I0oEsEmBqlr0

// request.headers.authorization = yelpAPI;

// /api/fastfood/location w/ lat,long as query params
router.get("/location", (req, res, next) => {
    console.log("GET @ /api/fastfood/location");

    placesQuery = 
})

router.get("/loc", (req, res, next) => {
    console.log("GET @ api/yelp/location");

    console.log(req.query); // req.params are only for POST reuqests

    yelpQuery = yelpAPI + "/businesses/search?latitude=" + req.query.latitude + "&longitude=" + req.query.longitude;

    console.log(yelpQuery);
    request(yelpQuery, { 'auth': { "bearer": yelpAPIKey}}, (req, r, body) => {

        let data = JSON.parse(body);

        let clientResponse = {
            total: data['total'],
            options: data['businesses']
        }

        // console.log(clientResponse)

        res.status(200).json(clientResponse)
        // if (err) {
        //     callback(err, null)
        // } else {
        //     let returnString = {
        //         total: body['total'],
        //         options: body['businesses']
        //     }
        //     callback(null, JSON.stringify(returnString))
        // }
    });


    // console.log(body);
    // https.get("")
    // MAKE API call to Yelp Fusion
    // https.get()

    // Construct the Yelp Fusion URL
    // getRestaurants(req.query.longitude, req.query.latitude, function(err, result) {
    //     if (err) {}

    //     console.log(result);

    //     res.status(200).json(result);
    // })

    
    //     // console.log(body);

    //     const userResponse = {
    //         "total": body['total'],
    //         "options": body['businesses']
    //     }

    //     // Send App response here
    //     return userResponse;
    //     // console.log(body["businesses"][0])
    //     // res.status(200).json(userResponse);


    // })

    // console.log(results);

    // // axios.get(yelpQuery)
    // //     .then(yelpData => {
    // //         console.log("RET from YELP");
    // //         console.log(yelpData);
    // //     })

    // res.status(400);
})


//https://stackoverflow.com/questions/49432579/await-is-only-valid-in-async-function
// getRestaurants: function(long, lat, callback) {
//     yelpQuery = yelpAPI + "/businesses/search?latitude=" + lat + "&longitude=" + long;

//     console.log(yelpQuery);
//     request(yelpQuery, { 'auth': { "bearer": yelpAPIKey}}, (err, req, res, body) => {
//         if (err) {
//             callback(err, null)
//         } else {
//             let returnString = {
//                 total: body['total'],
//                 options: body['businesses']
//             }
//             callback(null, JSON.stringify(returnString))
//         }
//     }

// }



module.exports = router;
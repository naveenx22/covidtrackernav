// requiring express 
const express = require('express');
const request = require('request');

// // requiring fs for importing json
// const fs = require('fs');   
app = express();

app.set('view engine' , 'ejs'); // to tell our app to use ejs

// var mydata; // data file that contains json content
// // importing json data from internet
// link = 'https://pomber.github.io/covid19/timeseries.json';   // the source from where we get data
// options  = {json : true, async: true}  //only receive json data

// request(link, options, (error, res, body) => {
//     if (error) {  // if error occurs
//         return  console.log(error)
//     };

//     if (!error && res.statusCode == 200) {
//         mydata = body;    // json in mydata file
//     };
// });
// // logic
// // const keysarray = Object.keys(mydata);
// var keysarray = [1,2,3,4,5,6,7,8]
// // default page
app.get("/" , function( req , res ){
res.render("homepage.ejs");   
});

app.get("/yesterday" , function( req , res ){
    res.render("yesterday.ejs");   
    });

app.get("/daybefore" , function( req , res ){
        res.render("daybefore.ejs");   
        });    
app.get("/about" , function( req , res ){
res.render("about.ejs");   
});
app.get("/india" , function( req , res ){
    res.render("india.ejs");   
    });

app.get("/mythbuster" , function( req , res ){
    res.render("mythbusters.ejs");
});    

app.get("/help" , function( req , res ){
        res.render("help.ejs");   
        });






// initialising server

app.listen( process.env.PORT || 3000 , function(){

    console.log("hello Naveen. Server is running on port 3000");

}); 
const { request } = require("express");
const express = require("express");
const res = require("express/lib/response");
const app = express();
const port = 5000;

app.get('/', (req, res) =>{
    res.sendFile('home.html',{root: __dirname})
});

app.listen(port, () =>{
    console.log(`Now listening on port ${port}`);
});

const express = require("express");
const app = express();



//config

if(process.nextTick.NODE_ENV !== "PRODUCTION")
{
    require("dotenv").config({
        path:"backend/config/.env"
    })
}




module.exports = app;
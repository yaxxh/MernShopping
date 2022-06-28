require('./Config/config.js')
require('./Config/config.json')
require("./assets/products.json");
/*require('./Models/db.js')*/
const db = require('express')
const express = require('express')
const app = express()

app.get('/getProducts',(req,res)=>{

    res.send(products);
    

})

app.use(express.json())
app.listen(process.env.PORT) || 3000
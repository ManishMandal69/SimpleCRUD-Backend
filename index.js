const express = require("express");
const mongoose =  require("mongoose");
const app = express()
const productRoute = require("./routes/product.routes")

// middleware for conversion
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/api/products", productRoute)

mongoose.connect('mongodb+srv://mandalmanish69:6trPZANiDEgqtosV@cluster0.nvrhble.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() =>{ console.log('Connected to Database!')
  app.listen(3000,()=>{
    console.log("server running on port 3000");
})})
  .catch(() => console.log('Connection failed'))

app.get('/', (req, res)=> {
    res.send("Hello from Node API")
})


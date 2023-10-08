const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();

const app = express();
const port = process.env.PORT || 3002;
app.get("/", (req, res) => {
  res.send("Hello World! everyone");
});

console.log('process.env.MONGO_DB',process.env.MONGO_DB)

mongoose.connect(`mongodb+srv://phuocanpro:${process.env.MONGO_DB}@phuocanpro.v5lwdg9.mongodb.net/?retryWrites=true&w=majority`)
.then(() => {
    console.log('Connect success!')
})
.catch((err) =>{
    console.log(err)
})

app.listen(port, () => {
  console.log("server is running in port: ", +port);
});
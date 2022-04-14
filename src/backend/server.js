const express = require("express");
const app = express();
// var cors = require('cors')

// app.use(express.json())
// app.use(cors())

const mongoose = require("mongoose");
const SuperAdmin_Route = require("./routes/SuperAdmin");
const Buyer_Route = require("./routes/Buyer");
const Seller_Route = require("./routes/Seller");



// Connecting to backend
const url =
"mongodb+srv://hafeez:hafeez@cluster0.lkw8z.mongodb.net/BoomAppDatabase"
const connection = mongoose
  .connect(url, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
  })
  .then(console.log("Connected to mongodb"))
  .catch((err) => console.log(err));


// app.use("/", (req, res)=>{
//     res.send("Hello it is me")
//     console.log('Hey it is me')
// })

app.use("/api", SuperAdmin_Route);
app.use("/api", Seller_Route);
app.use("/api", Buyer_Route);


app.listen("5000", () => {
  console.log("Backend is running at 5000");
});
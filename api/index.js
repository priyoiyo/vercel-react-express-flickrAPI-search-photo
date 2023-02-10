// Make express server
const express = require("express");
const app = express();
const cors = require("cors")
const bodyParser = require('body-parser')
const port = process.env.PORT || 8080;

app.use(cors())
app.use(bodyParser.json())

app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});
const flickrRoutes = require("./routes/flickr");

app.use("/api", flickrRoutes);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

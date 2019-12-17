const express = require("express");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const errorHandler = require("./middlewares/error.handler");
const postRoutes = require("./routes/posts");
const app = express();

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/mern-stack", { useNewUrlParser: true, useUnifiedTopology:true });

app.use(cors());
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/api/posts", postRoutes);

// Middle wares
app.use(errorHandler);

app.listen(8000, () => {
  console.log("Listening on port 8000");
});

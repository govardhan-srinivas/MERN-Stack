const express = require("express");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");

const errorHandler = require("./middlewares/error.handler");
const postRoutes = require("./routes/posts");
const app = express();

app.use(cors());
app.use(bodyParser());
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/api/posts", postRoutes);

// Middle wares
app.use(errorHandler);

app.listen(8000, () => {
  console.log("Listening on port 8000");
});

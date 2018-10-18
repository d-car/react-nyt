const express = require("express");
const path = require("path");
const app = express();
const methodOverride = require("method-override");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// Use CORS to bypass security
const cors = require("cors");

// Set port number
const PORT = process.env.PORT || 3000;

// Configure mongoose
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/reactNYT";
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);
const db = mongoose.connection;

// db errors/success
db.on("error", error => {
    console.log(`Database Error: ${error}`);
});

db.once("open", () => {
    console.log("Mongoose connection successful.");
});

// Serve static
app.use(express.static(path.join(__dirname, "..", "frontend", "build")));

// Set up CORS
app.use(cors());

// parser middleware
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({"extended": true}));

// Override POST methods to handle PATCH and DELETE
app.use(methodOverride("_method"));

// Set routers
const router_api = require(path.join(__dirname, "controllers", "api-routes.js"));

app.use("/api", router_api);

// Display the single page app
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));

});

const server = http.createServer(app);

// Start the server
server.listen(PORT, () => console.log(`App listening on ${PORT}.`));
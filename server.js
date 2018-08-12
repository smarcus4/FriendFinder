var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var path = require("path");



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));


var PORT = process.env.PORT || 8000;

require('./app/routing/apiRoutes.js')(app); 
require('./app/routing/htmlRoutes.js')(app);

app.get("/", function(req, res) {
	res.sendFile(path.join(__dirname, "home.html"));
});

app.listen(PORT, function(err){
    if (err) throw err;
    console.log("App is running on the PORT number : " + PORT);
})
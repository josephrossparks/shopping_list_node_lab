const express = require('express');
const bodyParser = require('body-parser');

const app = express();
// Serve files from client/dist folder. That's where all of our HTML, CSS, and JS
// from the React client app end up.
app.use(express.static('client/build'));
// This allows us to accept JSON bodies in POSTs and PUTs.
app.use(bodyParser.json());

var errorCallback = console.error.bind(console);

// Temporary in-memory database to store contacts.
var itemListDb = require("./in-memory-database")();
itemListDb.init([
    {
        name: "Milk",
        price: 3
    },
    {
        name: "Eggs",
        price: 2
    },
    {
        name: "Bread",
        price: 4
    }
]);

app.get('/api/items', function (req, res) {
	res.send(itemListDb.readAll());
});

app.post('/api/items', function (req, res) {
	itemListDb.create(req.body);
	res.send(itemListDb.readAll());
})


var server = app.listen(5000, function () {
	var port = server.address().port;
	console.log("Express server is up and running on port " + port)
})

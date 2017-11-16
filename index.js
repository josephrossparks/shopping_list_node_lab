const express = require('express');
const app = express();

const itemListDb = require("./in-memory-database")();

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


// Serve files from client/dist folder. That's where all of our HTML, CSS, and JS
// from the React client app end up.
app.use(express.static('client/build'));

// This allows us to accept JSON bodies in POSTs and PUTs.
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const errorCallback = console.error.bind(console);


app.get('/api/items', function (req, res) {
	res.send(itemListDb.readAll());
});


app.post('/api/items', function(req, res) {
    var item = req.body;
    itemListDb.create(item);
    res.send("SUCCESS");
});


app.delete('/api/items/:id', function(req, res) {
    var id = req.params.id;
    debugger;
    itemListDb.delete(id);
    res.send("SUCCESS");
});


var server = app.listen(5000, function () {
	var port = server.address().port;
	console.log("Express server is up and running on port " + port)
})

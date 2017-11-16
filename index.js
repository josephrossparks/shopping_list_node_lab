const express = require('express');
const app = express();

var pg = require('pg');

var pool = new pg.Pool({
   user: "josephparks",
   password: "",
   host: "localhost",
   port: 5432,
   database: "shopping_list_lab",
   ssl: false
 })

// Serve files from client/dist folder. That's where all of our HTML, CSS, and JS
// from the React client app end up.
app.use(express.static('client/build'));

// This allows us to accept JSON bodies in POSTs and PUTs.
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const errorCallback = console.error.bind(console);


app.get('/api/items', function (req, res) {
	pool.query("SELECT * FROM shopping_list").then(function(result) {
        res.send(result.rows);
    });
});





app.post("/api/items", function(req, res) {

    var item = req.body; // <-- Get the parsed JSON body
    var sql = "INSERT INTO shopping_list (name, price) " +
            "VALUES ($1::text, $2::int)";

    var values = [item.name, item.price];
    pool.query(sql, values).then(function() {
        res.status(201); // 201 Created
        res.send("INSERTED");
    });
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

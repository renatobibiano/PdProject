var compression = require('compression')
var express = require('express')
var app = express()
app.use(compression())

app.get('/', function (req, res, next) {
  // do some sync stuff
  queryDb()
    .then(function (data) {
      // handle data
      return makeCsv(data)
    })
    .then(function (csv) {
      // handle csv
    })
    .catch(next)
})


exports.list_all_discs = function(req, res) {
  global.connection.query('SELECT * from disc_collection', function (error, results, fields) {
    if (error) throw error;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
};

exports.create_a_disc = function(req, res) {
  var post = {
    name: req.body.name,
    year: req.body.year,
    collection: req.body.collection
  };

  global.connection.query("insert into disc_collection (name, year) values ('" 
      + post.name + "'," + post.year + "," + post.collection + ")", function (error, results, fields) {
    if (error) throw error;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
};

exports.read_a_disc = function(req, res) {
  global.connection.query('SELECT * from disc_collection where id = ?', req.params.discId, function (error, results, fields) {
    if (error) throw error;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
};

exports.update_a_disc = function(req, res) {
  var post = {
    name: req.body.name,
    year: req.body.year,
    collection: req.body.collection,
    id: req.body.id
  };

  global.connection.query("update disc_collection set name = '" 
      + post.name + "', year = " + post.year + ", collection = " + post.collection + " where id = " + id, function (error, results, fields) {
    if (error) throw error;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
};

exports.delete_a_disc = function(req, res) {
  global.connection.query("delete from disc_collection where id = " + req.params.discId, function (error, results, fields) {
    if (error) throw error;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
};
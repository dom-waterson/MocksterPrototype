(function () {
  'use strict';
  var express = require('express');
  var app = express();
  var debug = require('debug')('sample');
  var templates = require("./template.json");
  var bingo75 = require("./bingo75/bingo75.json");

  app.get('/', function (req, res) {
    res.send('Connected to Mockster Server From app');
  });

  app.get('/connect/bingo75', function (req, res) {
    var temp, game;
    game = bingo75.connect;
    temp = templates.connect;
    temp.guid = game;
    res.send(temp);
  });

  var server = app.listen(8081, function () {
    debug('Express server listening on port ' + server.address().port);
  });
})();

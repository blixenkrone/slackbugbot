console.log("Start of bot script \n ::::::::::::::::");

var express = require('express');
var bodyParser = require('body-parser');
var slackBot = require('slack-bot')(https://hooks.slack.com/services/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);

var app = express();
var port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', function(req, res) {
  res.status(200).send("This is a slack bug bot for Byrd");
});

app.listen(port, function() {
  console.log('listening on port' + port);
});

app.post('/hello', function(req, res, next) {
  var userName = req.body.user_name;
  var bugRef = function() {
    console.log("This is the bug # and link in Asana");
  };

  var botPayLoad = {
    text: "Hello " + userName + ", " + "your bug is submitted as # with link: *LINK*"
  };


  if (userName !== slackbot) {
    return res.status(200).json(botPayLoad);
  } else {
    return res.status(200).end();
  }
});

slackBot.send({
  text: 'OMG look at this thing',
  channel: '#bugbot',
}, callback);


console.log("End of bot script");

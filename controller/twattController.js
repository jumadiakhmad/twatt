const OAuth = require('oauth');
require('dotenv').config();
var Twitter = require('twitter');

var oauth = new OAuth.OAuth(
    'https://api.twitter.com/oauth/request_token',
    'https://api.twitter.com/oauth/access_token',
    '78jLAWmNjgsXZCBXtZ4o6APM5', //consumer key
    '48iRcM6gT6ew62feyCPUHT7UUynbmAwLhNcfms0uZebG9YcjbA', //application secret
    //process.env.CONSUMER_KEY, //consumer key
    //process.env.APPLICATION_SECRET, //application secret
    '1.0A',
    null,
    'HMAC-SHA1'
);

function timeline(req, res) {
  oauth.get(
      'https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=twitterapi&count=2',
       process.env.USER_TOKEN, //user token
       process.env.USER_SECRET, //user secret
      function(e, data) {
        if(e) console.log(e);
        console.log(data);
        res.send(data);
      }
    )
}

function search(req,res) {
  oauth.get(
    'https://api.twitter.com/1.1/search/tweets.json?q=Presiden',
    // '877289825212157952-SU0g6v5d1FiV3u7De0GjNlPHXxRPsHO',
     //'e0V35G8BfNzSxqXRA3wAme8ss4cJakGyHRrk2aUZEgniA',
    process.env.USER_TOKEN, //user token
    process.env.USER_SECRET, //user secret
    function(e,data) {
      if(e) console.log(e);
      res.send(data)
    }
  )
}

var client = new Twitter({
  consumer_key: 'lA92NbIW6MwniRKeKg2vD8T5Q',
  consumer_secret: 'KelSsUvSwMkaKmczWlpHs6PBh3jHOzpbwEFHiQRxSI1ZQDXU1n',
  access_token_key: '877289825212157952-FwrVToFBy8ZqFczYdflLA6GNfZw4Xvh',
  access_token_secret: 'EvG4zTZuZ7AuJMkhW97xOLOxouNVJlBVqVjqdj8GhZ75N'
});

function postTweet(req, res) {
  client.post('/statuses/update', { status : 'Liburan Segera Berakhir'}, function(error, tweet, response) {
    if (error) console.log(error);
    // console.log(tweet);  // Tweet body.
    // console.log(response);  // Raw response object.
    res.send(tweet);
  });
}

module.exports = {
  timeline,search,postTweet
}

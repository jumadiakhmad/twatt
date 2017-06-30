const OAuth = require('oauth');
//require('dotenv').config();
var oauth = new OAuth.OAuth(
    'https://api.twitter.com/oauth/request_token',
    'https://api.twitter.com/oauth/access_token',
    '78jLAWmNjgsXZCBXtZ4o6APM5', //consumer key
    '48iRcM6gT6ew62feyCPUHT7UUynbmAwLhNcfms0uZebG9YcjbA', //application secret
    '1.0A',
    null,
    'HMAC-SHA1'
  );

function timeline(req, res) {

    oauth.get(
      'https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=twitterapi&count=2',
      // process.env.USER_TOKEN, //user token
      // process.env.USER_SECRET, //user secret
      '877289825212157952-SU0g6v5d1FiV3u7De0GjNlPHXxRPsHO',
      'e0V35G8BfNzSxqXRA3wAme8ss4cJakGyHRrk2aUZEgniA',
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
    '877289825212157952-SU0g6v5d1FiV3u7De0GjNlPHXxRPsHO',
    'e0V35G8BfNzSxqXRA3wAme8ss4cJakGyHRrk2aUZEgniA',

    function(e,data) {
      if(e) console.log(e);
      res.send(data)
    }
  )
}

function postTweet(req,res) {
  oauth.post(
    `https://api.twitter.com/1.1/statuses/update.json?status=${req.body.search}`,
    '877289825212157952-SU0g6v5d1FiV3u7De0GjNlPHXxRPsHO',
    'e0V35G8BfNzSxqXRA3wAme8ss4cJakGyHRrk2aUZEgniA',
    `${req.body.search}`,
    "txt",
    function(e,data) {
      if(e) console.log(e);
      res.send(data)
    }
  )
}




module.exports = {
  timeline,search,postTweet
}

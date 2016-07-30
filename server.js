var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

//var ipaddress = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
//var port = process.env.OPENSHIFT_NODEJS_PORT || 3000;


app.get('/say/hello', sayHello);
app.get('/api/users', function(req, res){
  var users = [
    {username: 'mark', first: 'Mark', last: 'Christensen'},
    {username: 'bob', first: 'Bob', last: 'Hope'},
    {username: 'charlie', first: 'Charlie', last: 'Garcia'}
  ];
  res.send(users);
});


function sayHello(req, res){
  res.send('hello world');
};

app.listen(3000);

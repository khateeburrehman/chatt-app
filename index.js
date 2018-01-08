var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3001;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  // socket.broadcast.emit('hi');
    socket.on('chat message', function(msg) {
    io.emit('chat message', msg);
    });
    socket.on('private message', function (from, msg) {
    console.log('I received a private message by'+from);
    io.emit('private message', from ,msg);
  });
  socket.on('private message1', function (from, msg) {
  console.log('I received a private message1 by'+from);
  io.emit('private message1', from ,msg);
});

});

http.listen(port, function(){
  console.log('listening on *:' + port);
});

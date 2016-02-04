io.on('connection', function (socket) {

/*
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
*/
  socket.on('mouvement', function(data){
    console.log('ligne : ' + data.ligne);
    console.log('col : ' + data.col);
  });


});


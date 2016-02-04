var socket = io();
/*socket.on('connection', function (socket) {

});*/

socket.on('mouvement', function(data){
	afficherEffet(data.ligne,data.col);
	//console.log('ligne : ' + data.ligne);
	//console.log('col : ' + data.col);
});

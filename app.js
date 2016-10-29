// importamos el modulo http  nativo (built in) de nodejs
const http = require('http');
const port = 8000;

// function para manejar las peticiones (request) entrantes a la aplicacion
function handleRequest(request, response) {
  console.log(request.url);

  if (request.url === '/hola') {
    response.write('Hola que ');
    response.end();
  }

  if (request.url === '/chao') {
    response.write('Adios, que te vaya bien');
    response.end();
  }

}

var server = http.createServer(handleRequest);

// Iniciamos el servidor http en el puerto 8000 y se le pasa  una funcion que se ejecutará cuando
// el servidor ya esté escuchando (callback)
server.listen(port, function() {
  console.log('Server is listening at  http://localhost:' + port);
});





'use strict';

const Hapi = require('hapi');


const server = Hapi.server({
  port: 3000,
  host: 'localhost'
});

server.route({
  method: 'GET',
  path: '/',
  handler: (req, h) => {
    return 'Hello, WORLD!';
  }
});

server.route({
  method: 'GET',
  path: '/{name}',
  handler: (req, h) => {
    return `Hello, ${encodeURIComponent(req.params.name)}!`;
  }
});

const init = async () => {
  await server.start();
  console.log(`Server running at ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();

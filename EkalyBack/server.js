const http = require('http');
const app = require('./app');

const isPortValid = (val) => {
  const port = parseInt(val, 10);
  if (isNaN(port)) return val;
  if (port >= 0) return port;
  return false;
};

const port = isPortValid(process.env.PORT || 3000);
app.set('port', port);
const server = http.createServer(app, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hello World</h1>');
});
// const server = http.createServer(app);
server.on('listening', () => {
  const address = server.address();
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + port;
  console.log('listening on ', bind);
});

server.listen(port);

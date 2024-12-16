const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hello, World!');
};

const server = http.createServer(requestListener);

const port = 8080;

function startServer(){
  server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
}

function handleErrors(err){
  if(err.code === 'EADDRINUSE'){
    console.error(`Port ${port} is already in use. Please choose another port or stop the process using the port.`);
    process.exit(1); //Exit with an error code
  }else{
    console.error(`An error occured: ${err}`);
    process.exit(1); //Exit with an error code
  }
}

try{
  startServer();
} catch (err){
  handleErrors(err)
}

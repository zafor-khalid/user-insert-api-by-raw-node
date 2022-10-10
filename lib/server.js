
const http = require('http');
const { handleReqRes } = require('../helper/handlerReqRes');

// App Object -Module Scaffoling
const server = {};


// Create server Function
server.createServer = () => {
    const servers = http.createServer(server.handleReqRes);
    servers.listen(3000, 'localhost', () => {
        // console.log(environment);
        // console.log(process.env.NODE_ENV);
        console.log(`listen the server ${3000}`);
    });
};
// Handle request and response
server.handleReqRes = handleReqRes;
// Create server function call
server.init=()=>{
    server.createServer();
}

module.exports=server;

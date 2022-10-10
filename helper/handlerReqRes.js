const url = require('url');
const { StringDecoder } = require('string_decoder');
const routes = require('../routes');
const {notfoundHandler}=require('../handler/routesHandle/notFound');

const handler = {};



handler.handleReqRes = (req, res) => {
    
    const parseUrl = url.parse(req.url, true);
    console.log(parseUrl);
    const qureyObject = parseUrl.query;
    const path = parseUrl.pathname;
    const trimmedPath = path.replace(/^\/|\/$/g, '');
    const method = req.method.toLowerCase();
    const headersObject = req.headers;
    console.log(headersObject);

    const decoder = new StringDecoder('utf8');
    let realData = '';

    const requestObject = {
        parseUrl,
        qureyObject,
        path,
        trimmedPath,
        method,
        headersObject
    };

    const chooseHandler = routes[trimmedPath] ? routes[trimmedPath] : notfoundHandler;

    req.on('data', (buffer) => {
        realData += decoder.write(buffer);
    });
    req.on('end', () => {
        realData += decoder.end();
     
        requestObject.body = JSON.parse(realData);
        chooseHandler(requestObject, (statusCode, payload) => {
            const statuscode = typeof statusCode === 'number' ? statusCode : 500;
            const payloadobj = typeof payload === 'object' ? payload : {};
            const payloadString = JSON.stringify(payloadobj);
            res.setHeader("Content-Type","application/json");
            res.writeHead(statuscode);
            res.end(payloadString);
        });
    });
};

// Export Library
module.exports = handler;

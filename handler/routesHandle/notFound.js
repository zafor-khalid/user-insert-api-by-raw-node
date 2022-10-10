const handler = {};

handler.notfoundHandler = (requestObject, callback) => {

    callback(404, {
        message: 'Url not found!',
    });
};


module.exports = handler;

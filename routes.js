
const {userHandler}=require('./handler/routesHandle/userInsert')

// Routes object - scaffolding
const routes = {
    'v1/mow/agencies/insert-user':userHandler,
};

// Export module
module.exports = routes;

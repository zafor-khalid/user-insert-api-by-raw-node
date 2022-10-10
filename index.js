
const server=require('./lib/server');
// App Object -Module Scaffoling
const app = {};

// initilization 

app.init=()=>{
    server.init();
}

app.init();

module.exports=app;

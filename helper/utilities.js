
// Module Scaffolding 
const utilities={};

// parse string to json 
utilities.parseJSON= (jsonString) => {
    // console.log("jsonString",jsonString);
    let output;

    try {
        output = JSON.parse(jsonString);
    } catch(error) {
        // console.log(error);
        output = {};
    }
    // console.log("output",output);
    return output;
};

// export module 
module.exports=utilities;

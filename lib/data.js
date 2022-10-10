const fs=require('fs');
const path = require('path');

// Module Scaffolding 
const lib={}

//Base dir
lib.basedir=path.join(__dirname,'/../.data/');
lib.create=(dir,file,data,callback)=>{
  
    fs.open(`${lib.basedir+dir}/${file}.json`,'wx',(err,fd)=>{
        console.log(fd);
        if(!err && fd){
            let stringData=JSON.stringify(data);
            fs.writeFile(fd,stringData,(err2)=>{
                if(!err2){
                    fs.close(fd,(err3)=>{
                        if(!err3){
                            callback(false)
                        }
                        else{
                            callback(err3)
                        }
                    })
                }
                else{
                    callback(err2)
                }
            })
        }
        else{
            callback(err)
        }
    })
}

// Read File 
lib.read=(dir,file,callback)=>{
    // read file 
    fs.readFile(`${lib.basedir+dir}/${file}.json`,'utf8',(err,data)=>{
        callback(err,data)
    })
}

// export module 
module.exports=lib;

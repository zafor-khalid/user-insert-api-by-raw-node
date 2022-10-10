const {read,create}=require('../../lib/data')
const data=require('../../lib/data')


const handler = {};

handler.userHandler = (requestObject, callback) => {
    const acceptedMethod=['post'];
    if(acceptedMethod.indexOf(requestObject.method)>-1){
        handler._user[requestObject.method](requestObject,callback);

    }
    else{
        callback(405);
    }
   
};
handler._user={};
handler._user.post=(requestObject,callback)=>{


    const user_id=typeof(requestObject.body.UserID)==='string' &&  requestObject.body.UserID.trim().length>0?requestObject.body.UserID:false;

    const agency_id=typeof(requestObject.body.AgencyID)==='string' &&  requestObject.body.AgencyID.trim().length>0? requestObject.body.AgencyID:false;


    if(user_id && agency_id){
        read('user',user_id,(err)=>{
            if(err){
                const userObj={
                    user_id:user_id,
                    agency_id:agency_id,
                    
                }
                create('user',user_id,userObj,(error)=>{
                    if(!error){
                        callback(200,{
                            'message':'Your created successfully.'
                        })
                    }
                    else{
                        callback(500,{
                            'error':'An error has server side!'
                        })
                    }
                })
            }
            else{
                callback(400,{
                    error:"User already exits!"
                })
            }
        })
    }
    else{
        callback(400,{
            error:"There have an error."
        })
    }
};
module.exports = handler;

const bcrypt=require("bcrypt");
const saltRounds=10; //bcrypt algo performs rotation of the encrypted string specified no. of timmes 

const generateHash=plainTextPassword=>{
    return new Promise((resolve,reject)=>{
        bcrypt.hash(plainTextPassword,saltRounds,(err,hash)=>{
            if(err){
                reject(err);
            }
            else{
                resolve(hash);
            }
        })
    })
}

const compareHash=(plainTextPassword,passwordHash)=>{
    return new Promise((resolve,reject)=>{
        bcrypt.compare(plainTextPassword,passwordHash,(err,result)=>{
            if(err){
                reject(err);            
            }
            else{
                resolve(result);
            }
            
        })

    })
}

const passwordString="mypassword";

generateHash(passwordString)
.then(encryptedPassword=>{
    console.log("encrypted Password:",encryptedPassword);
    compareHash(passwordString,encryptedPassword)
    .then(result=>console.log(result))
    .catch(err=>console.error(err))
})
.catch(err=>{
    console.log(err)
})
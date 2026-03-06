const mongoose = require('mongoose');


async function main(){
     try {
        await mongoose.connect(process.env.DB_CONNECT_STRING);
        console.log("Database is Connected Successfully");
     } catch (error) {
        console.log("Database is not Connected"+ error.message);
     }
}

module.exports = main;
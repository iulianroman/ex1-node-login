// config/database.js
const mongoose = require('mongoose');
const dbhost    = process.env.DBHOST || 'localhost';
 mongoose.Promise = global.Promise;
 mongoose.set('bufferCommands', false);
 mongoose.connect(`mongodb://${dbhost}/login`,{
     useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
    }).then(success => {
        console.log('[OK] Successfully connected to the database!');
  		    },err => {
  		        console.log('[ERROR] Error connecting to the database!');
		    });
module.exports = mongoose 
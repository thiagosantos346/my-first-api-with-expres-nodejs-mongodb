const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/restapi', { useNewUrlParser: true }, (err)=>{
    if(err){
        console.log('error :'+err)
    }
} );
mongoose.Promise = global.Promise;

module.exports = mongoose;

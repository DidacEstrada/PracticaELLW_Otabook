const mongoose = require('mongoose');


async function connect() {
return mongoose.connect('mongodb://127.0.0.1:27017/mangues');
}

module.exports.connect =  connect;

const mongoose = require('mongoose');
const URI = 'mongodb://localhost/meanCrudEmployees';
mongoose.connect(URI, { useNewUrlParser: true })
    .then(db => console.log('DataBase is online!'))
    .catch(err => console.log(err));
module.exports = mongoose;
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SubscribeSchema = new Schema({
    first_name: String,
    last_name: String,
    email: String
});
var Subscriber = mongoose.model('Subscriber', SubscribeSchema);
module.exports = Subscriber 


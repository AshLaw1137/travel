var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UploadSchema = new Schema({
    img_url: String,
    email: String,
    quote: String
});
var Uploads = mongoose.model('Uploads', UploadSchema);
module.exports = Uploads;

const mongoose = require('mongoose');

const ImageSchema = new mongoose.Schema({
    title: { type: String, required: true },
    url: { type: String, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

module.exports = mongoose.model('Image', ImageSchema);

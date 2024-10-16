
const mongoose = require('mongoose');

const chatMessageSchema = new mongoose.Schema({
    user: { type: String, required: true },
    message: { type: String, required: true },

});

const ChatMessage = mongoose.model('ChatMessage', chatMessageSchema);
module.exports = ChatMessage;


var mongoose = require('mongoose');

module.exports = mongoose.model('Todo', {
    text: {
        type: String,
        default: ''
    },
    text1: {
        type: String,
        default: ''
    },
    text2: {
        type: String,
        default: ''
    },
    text3: {
        type: String,
        default: ''
    }
});
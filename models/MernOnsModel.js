const mongoose = require('mongoose');

const MernOn = new mongoose.Schema(
    {
        name: String,
        course: String,
        city: String
    },
    { timestamps: true }


)
module.exports = mongoose.model('Mern_on', MernOn)
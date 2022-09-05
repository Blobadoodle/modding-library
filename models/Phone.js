const mongoose = require('mongoose');

const PhoneSchema = new mongoose.Schema({
    manufacturer: {type: mongoose.Schema.Types.ObjectId, ref: 'Manufacturer' },
    name: {type: String, required: true},
    model: {type: String, required: true},
    chipset: {type: String, required: true},
    sdcard: {type: String, required: true},
    storage: {type: String, required: true},
    usb: {type: String, required: true},
    battery: {type: String, required: true},
    display: {type: String, required: true},
    os: {type: String, required: true},
    image: {type: String, required: true},
    sections: {type: Array, required: true},
    partmap: {type: String, required: true},
    addedby: {type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = new mongoose.model('Phone', PhoneSchema);
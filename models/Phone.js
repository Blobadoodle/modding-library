const mongoose = require('mongoose');

const PhoneSchema = new mongoose.Schema({
    brand: {type: mongoose.Schema.Types.ObjectId, ref: 'Manufacturer' },
    name: {type: String, required: true},
    model: {type: String, required: true},
    chipset: {type: String, required: true},
    sdcard: {type: String, required: false},
    storage: {type: String, required: true},
    usb: {type: String, required: true},
    battery: {type: String, required: true},
    display: {type: String, required: true},
    os: {type: String, required: true},
    image: {type: String, required: true},
    sections: {type: Object, required: false},
    partmap: {type: String, required: false},
    addedby: {type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});
PhoneSchema.index({name: 'text', model: 'text', chipset: 'text'});

module.exports = new mongoose.model('Phone', PhoneSchema);
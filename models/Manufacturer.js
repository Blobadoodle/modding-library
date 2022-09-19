const mongoose = require('mongoose');

const ManufacturerSchema = new mongoose.Schema({
    name: {type: String, required: true},
    phones: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'Phone'    
    }],
    addedby: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
});

module.exports = new mongoose.model('Manufacturer', ManufacturerSchema);
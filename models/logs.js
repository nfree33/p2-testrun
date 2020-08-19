const mongoose = require('mongoose')
const Schema = mongoose.Schema;

//Schema created
const logSchema = new Schema ({
    title: { type: String, require: true},
    entry: {type: String, require: true},
    isShipBroken: {type: Boolean, require: true},
    
},
{timestamps: true})

// Create Model from our Schema
const Log = mongoose.model('Log', logSchema);


//Export Log Model
module.exports = Log;


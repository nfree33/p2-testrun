const mongoose = require('mongoose')
const Schema = mongoose.Schema;

//Schema created
const crewSchema = new Schema ({
    name: { type: String, require: true},
    rank: {type: String, require: true},
    homePlanet: {type: String, require: true},
    engineeringAccess: {type: Boolean, require: true},
    
},
{timestamps: true})

// Create Model from our Schema
const Crew = mongoose.model('Crew', crewSchema);


//Export Log Model
module.exports = Crew;


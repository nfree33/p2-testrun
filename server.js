require('dotenv').config();

// dependencies
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');

//Constants
const PORT = process.env.PORT || 3000;
// middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(methodOverride('_method'));

//MONGO CONNECTION
const mongoURI = process.env.MONGO_URI;
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true})
mongoose.connection.once('open', ()=>{
    console.log('connected to mongo')
})


//CONTROLLER
const logsController = require('./controllers/logs.js');
app.use('/logs', logsController)

const crewmembersController = require('./controllers/crewmembers.js');
app.use('/crewmembers', crewmembersController)



//LISTEN
app.listen(PORT, (req,res)=>{
    console.log("Captains Log is Heavy")
})
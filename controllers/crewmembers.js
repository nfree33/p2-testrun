const express = require('express');
const router = express.Router();
const Crew = require('../models/crewmembers.js')

// ADD INDUCE ROUTES
//INDEX
router.get('/', (req, res) => {
    Crew.find({}, (error, allCrew)=>{
    res.render('crewmembers/Index', {
        crew: allCrew
    })
});

});

//NEW
router.get('/new', (req, res) => {
    res.render('crewmembers/New')
})
//DELETE
router.delete('/:id', (req, res) => {
    // Delete document from collection
    Crew.findByIdAndRemove(req.params.id, (err, crew) => {
        res.redirect('/crewmembers');
    });
});

// UPDATE
router.put('/:id', (req, res) => {
    req.body.engineeringAccess = req.body.engineeringAccess === "on" ? true : false;

    // Update the crew document using our model
    Crew.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedModel) => {
        res.redirect('/crewmembers');
    });
});

//CREATE
router.post("/", (req, res) => {
    // console.crew(req.body)
    if (req.body.engineeringAccess === "on") {
        req.body.engineeringAccess = true;
    } else if (req.body.engineeringAccess === "off") {
        req.body.engineeringAccess = false;
    }
    Crew.create(req.body, (error, createdCrew) => {
        res.redirect('/crewmembers');
    })
})

//EDIT
router.get('/:id/edit', (req, res) => {
    // Find our document from the collection - using mongoose model
    Crew.findById(req.params.id, (err, foundCrew) => {
        // render the edit view and pass it the found fruit
        res.render('crewmembers/Edit', {
            crew: foundCrew
        })
    });
});

//SHOW
router.get('/:id', (req, res) => {
    // Find the specific document
    Crew.findById(req.params.id, (error, foundCrew) => {
        // render the Show route and pass it the foundCrew
        res.render('crewmembers/Show', {
            crew: foundCrew
        });
    });
});





//EXPORT ROUTER
module.exports = router
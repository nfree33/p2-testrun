const express = require('express');
const router = express.Router();
const Log = require('../models/logs.js')

// ADD INDUCE ROUTES
//INDEX
router.get('/', (req, res) => {
    Log.find({}, (error, allLogs)=>{
    res.render('logs/Index', {
        logs: allLogs
    })
});

});

//NEW
router.get('/new', (req, res) => {
    res.render('logs/New')
})
//DELETE
router.delete('/:id', (req, res) => {
    // Delete document from collection
    Log.findByIdAndRemove(req.params.id, (err, log) => {
        res.redirect('/logs');
    });
});

// UPDATE
router.put('/:id', (req, res) => {
    req.body.isShipBroken = req.body.isShipBroken === "on" ? true : false;

    // Update the log document using our model
    Log.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedModel) => {
        res.redirect('/logs');
    });
});

//CREATE
router.post("/", (req, res) => {
    // console.log(req.body)
    if (req.body.isShipBroken === "on") {
        req.body.isShipBroken = true;
    } else if (req.body.isShipBroken === "off") {
        req.body.isShipBroken = false;
    }
    Log.create(req.body, (error, createdLog) => {
        res.redirect('/logs');
    })
})

//EDIT
router.get('/:id/edit', (req, res) => {
    // Find our document from the collection - using mongoose model
    Log.findById(req.params.id, (err, foundLog) => {
        // render the edit view and pass it the found fruit
        res.render('logs/Edit', {
            log: foundLog
        })
    });
});

//SHOW
router.get('/:id', (req, res) => {
    // Find the specific document
    Log.findById(req.params.id, (error, foundLog) => {
        // render the Show route and pass it the foundLog
        res.render('logs/Show', {
            log: foundLog
        });
    });
});





//EXPORT ROUTER
module.exports = router
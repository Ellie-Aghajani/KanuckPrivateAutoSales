const express = require('express');
const router  = express.Router();
const searchQueries = require('../db/queries/vehicles');

// This is where we look into the vehicle database table ^^ and return json response as a variable
//     called vehicles
router.get('/', (req, res) => {
  searchQueries.getVehicles(req.query)
    .then(vehicles => {
      res.json({ vehicles });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

router.post('/filter', (req, res) => {
  searchQueries.filterVehicles(req.body)
    .then(vehicles => {
      res.json({ vehicles });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    })
})

router.post('/likes', (req, res) => {
  searchQueries.addlikes(req.body)
    .then (vehicles => {
      res.json({ vehicles });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    })
})

module.exports = router;
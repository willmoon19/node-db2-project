const router = require('express').Router();
const Cars = require('./cars-model');
const {
    checkCarId,
    checkCarPayload,
    checkVinNumberValid,
    checkVinNumberUnique,
  } = require('./cars-middleware');

router.get('/', (req, res, next) => {
    res.json({message: 'router'})
});

router.get('/', (req, res, next) => {
    res.json({message: 'router'})
});

router.get('/', (req, res, next) => {
    res.json({message: 'router'})
});  


module.exports = router;
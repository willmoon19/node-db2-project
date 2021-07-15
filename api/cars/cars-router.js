const router = require('express').Router();
const Cars = require('./cars-model');
const {
    checkCarId,
    checkCarPayload,
    checkVinNumberValid,
    checkVinNumberUnique,
  } = require('./cars-middleware');

router.get('/', (req, res, next) => {
    Cars.getAll()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(next)
});

router.get('/:id', checkCarId, (req, res, next) => {
    Cars.getById(req.params.id)
        .then(car => {
            res.status(200).json(car)
        })
        .catch(next)
});

router.post('/', (req, res, next) => {
    res.json({message: 'router'})
});  


module.exports = router;
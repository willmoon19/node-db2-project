const router = require('express').Router();
const Cars = require('./cars-model');
const {
    checkCarId,
    checkCarPayload,
    checkVinNumberValid,
    checkVinNumberUnique,
  } = require('./cars-middleware');

router.get('/', async (req, res, next) => {
    try {
        const cars = await Cars.getAll()
        res.json(cars)
    } catch(err) {
        next(err)
    }
});

router.get('/:id', checkCarId, (req, res, next) => {
    res.json(req.car)
});

router.post('/',
    checkCarPayload,
    checkVinNumberValid,
    checkVinNumberUnique,
    async (req, res, next) => {
        try {
            const car = await Cars.create(req.body)
            res.json(car)
        } catch(err) {
            next(err)
        }
});  


module.exports = router;
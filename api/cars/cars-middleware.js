const Cars = require('./cars-model')

const checkCarId = (req, res, next) => {
  Cars.getById(req.params.id)
    .then(car => {
      if(!car) {
        res.status(404).json({ message: `car with id ${req.params.id} is not found` })
      } else {
        req.car = car
        next()
      }
    })
    .catch(next)
}

const checkCarPayload = (req, res, next) => {
  const { vin, make, model, mileage } = req.body
    if(!vin) {
      res.status(400).json({ message: "vin is missing" })
    } else if(!make) {
      res.status(400).json({ message: "make is missing" })
    } else if(!model) {
      res.status(400).json({ message: "model is missing" })
    } else if(!mileage) {
      res.status(400).json({ message: "mileage is missing" })
    } else {
      next()
    }
}

const checkVinNumberValid = (req, res, next) => {
  next()
}

const checkVinNumberUnique = (req, res, next) => {
  next()
}

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique,
}
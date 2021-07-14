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
  next()
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
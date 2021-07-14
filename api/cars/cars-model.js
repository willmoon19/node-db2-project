const db = require('../../data/db-config')

const getAll = () => {
  return db('cars')
}

const getById = async (id) => {
  const car = await db('cars').where({ id })
  return car
}

const create = async ({ vin, make, model, mileage }) => {
  const [id] = await db('cars')
    .insert({ vin, make, model, mileage })
  return getById(id)
}

module.exports = { getAll, getById, create }

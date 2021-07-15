// STRETCH
const cars = [
    {
        vin: '111111111111',
        make: 'honda',
        model: 'civic',
        mileage: '80000',
        title: 'clean',
        transmission: 'auto',
    },
    {
        vin: '111111111112',
        make: 'hyundai',
        model: 'genesis',
        mileage: '90000',
        title: 'clean',
        transmission: 'auto',
    },
    {
        vin: '111111111113',
        make: 'tesla',
        model: 'model 1',
        mileage: '70000',
        title: 'clean',
        transmission: 'auto',
    },
    {
        vin: '111111111114',
        make: 'toyota',
        model: 'prius',
        mileage: '60000',
        title: 'clean',
        transmission: 'auto',
    },
]


exports.seed = async function(knex) {
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}

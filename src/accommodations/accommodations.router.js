const router = require('express').Router()

const accommodationServices = require('./accommodations.http')

router.route('/')
    .get(accommodationServices.getAll)




module.exports= {
    router
}

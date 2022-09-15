const accommodationControllers = require('./accommodations.controllers')

const getAll = (req, res) => {
    accommodationControllers.getAllAccommodations()
        .then(response => {
            res.status(200).json(response)
        })
        .catch(err => {
            res.status(400).json(err)
        })
}

const getById = (req, res) => {
    const id = req.params.id
    accommodationControllers.getAccommodationById(id)
        .then(response => {
            res.status(200).json(response)
        })
        .catch(err => {
            res.status(400).json(err)
        })
}


const postMyAccomodation = (req, res) => {
    const data = req.body
    if(!Object.keys(data).length){
        return res.status(400).json({message: 'Missing Data'})
    } else if (
        !data.title ||
        !data.description ||
        !data.guests ||
        !data.rooms ||
        !data.beds ||
        !data.bathrooms ||
        !data.price ||
        !data.commision ||
        !data.placeId 
    ){
        return res.status(400).json({
                message: 'All fields must be completed', 
                fields: {
                    title: 'String',
                    description: 'String',
                    guests: 'Integer',
                    rooms: 'Integer',
                    beds: 'Integer',
                    bathrooms: 'Float',
                    price: 'Float',
                    commision: 'Float',
                    placeId: 'uuid'
                }
            })
    } else {
        data.hostId = req.params.hostId
        accommodationControllers.createAccommodation(data)
            .then(response => {
                res.status(201).json(response)
            })
            .catch(err => {
                res.status(400).json(err)
            })
    }

}

const editMyAccommodation = (req, res) => {
    const id = req.params.accommodationId
    const data = req.body
    if(!Object.keys(data).length){
        return res.status(400).json({message: 'Missing Data'})
    } else if (
        !data.title ||
        !data.description ||
        !data.guests ||
        !data.rooms ||
        !data.beds ||
        !data.bathrooms ||
        !data.price ||
        !data.commision
    ){
        return res.status(400).json({
                message: 'All fields must be completed', 
                fields: {
                    title: 'String',
                    description: 'String',
                    guests: 'Integer',
                    rooms: 'Integer',
                    beds: 'Integer',
                    bathrooms: 'Float',
                    price: 'Float',
                    commision: 'Float'
                }
            })
    } else {
        accommodationControllers.editAccommodation(id, data)
            .then(response => {
                res.status(200).json({message: 'Accommodation edited succesfully'})
            })
            .catch(err => {
                res.status(400).json(err)
            })
    }
}



const removeMyAccommodation = (req, res) => {
    const id = req.params.accommodationId
    accommodationControllers.deleteAccommodation(id)
        .then(response => {
            res.status(200).json({message: 'Accomodation Deleted Succesfully'})
        })
        .catch(err => {
            res.status(400).json(err)
        })
}



module.exports = {
    getAll, 
    getById,
    postMyAccomodation,
    editMyAccommodation,
    removeMyAccommodation
}



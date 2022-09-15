const Accommodations = require("../models/accommodations.model");
const Places = require("../models/places.model");
const Users = require("../models/user.model");

const getAllAccommodations = async () => {
  const data = await Accommodations.findAll({
    include: [
        {
            model: Places,
            
        },
        {
          model: Users,
          as: 'user'
        },
    ],
    // attributes: {
    //   exclude: ["createdAt", "updatedAt", "userId", "placeId", "hostId"],
    // },
  });

  // const data = await Users.findAll({
  //     include: {
  //         model: Accommodations,
  //         include: {
  //             model: Places,
  //             attributes:{
  //                 exclude: ['createdAt', 'updatedAt']
  //             }
  //         }
  //     }
  // })
  return data;
};

const getAccommodationById = async (id) => {
  const data = await Accommodations.findOne({
    where: {
      id,
    },
    include: {
      model: Places,
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    },
    attributes: {
      exclude: ["createdAt", "updatedAt", "userId", "placeId", "hostId"],
    },
  });
  return data;
};


const createAccommodation = async(userId, data) => {
  const id = req.user.id
  const newAccommodation = await Accommodations.create({
      id: UUID.v4(),
      title: data.title,
      description: data.description,
      guest: data.guest,
      rooms: data.rooms,
      beds: data.beds,
      bathrooms: data.bathrooms,
      price: data.price,
      hostId: userId,
      score: data.score,
      placesId: data.placesId,
      commision: data.commision,
      
      
  }
  )
  return newAccommodation
}

module.exports = {
  getAllAccommodations,
  getAccommodationById,
  createAccommodation
};

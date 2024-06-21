const User = require("../models/User");

const users = [
  {
    "_id": "65b8e564ea5ce114184ccb96",
    "firstname": "demo",
    "lastname": "user",
    "email": "demo@gmail.com",
    "password": "$2a$10$GH8p5cAsGFEdYsLaSfTQ3e1eUs7KbLmVBltjbX4DDCj2eyO2KW/Ze",
    "isVerified": true,
    "isAdmin": false,
    "__v": 0
  },
  {
    "_id": "65c2526fdcd9253acfbaa731",
    "firstname": "Pritam",
    "lastname": "Rao",
    "email": "pritamrao38@gmail.com",
    "password": "$2a$10$VDenJop.L9rrjLptP8C5We7S9lkiQ98/cQwWrrxTIU58ibORrBmtW",
    "isVerified": true,
    "isAdmin": false,
    "__v": 0,
    "phone": 9861006347
  },
  {
    "_id": "6661c80c5eae7eff9f40de4b",
    "firstname": "subham",
    "lastname": "",
    "email": "pritamrao92@gmail.com",
    "phone": null,
    "password": "$2a$10$AROEgeGs.K.Gi/wNU8Kuv.osfobMLlWOSp1ZQV97W6pOfNB3PBr8W",
    "isVerified": true,
    "isAdmin": false,
    "__v": 0,
    "Gender": ""
  },
  {
    "_id": "6669b974aaad1bada376adb8",
    "firstname": "Subham",
    "lastname": "Rao",
    "email": "pritamrao91@gmail.com",
    "phone": null,
    "password": "$2a$10$tAmrOHS.x8zOux/fz7N/bOorMTFmxfSAdZms9NPu8f4EMZiISm9TO",
    "isVerified": false,
    "isAdmin": false,
    "__v": 0
  },
  {
    "_id": "666ef79b99284b2224b00f1d",
    "firstname": "kiran",
    "lastname": "Kumar ",
    "email": "pritamrao48@gmail.com",
    "phone": null,
    "password": "$2a$10$kzJdCXNs4YyKIFJ96kVYg.TRPQyfOZ2U0oGCcC.gdnDewVzZ2mAXO",
    "isVerified": true,
    "isAdmin": false,
    "__v": 0
  },
  {
    "_id": "6673cc5ba03c1aa7fc4d11f8",
    "firstname": "Mukinder",
    "lastname": "Rao",
    "email": "pritamrao37@gmail.com",
    "phone": null,
    "password": "$2a$10$CnMTEqH4UT.tuAiiVXaMCu2uuel/VPyI4rjZYKpmVk9BoOFVyjyMW",
    "isVerified": true,
    "isAdmin": false,
    "__v": 0
  }
]

exports.seedUser = async () => {
  try {
    await User.insertMany(users);
    console.log("User seeded successfully");
  } catch (error) {
    console.log(error);
  }
};
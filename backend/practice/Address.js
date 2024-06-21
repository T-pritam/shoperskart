const Address = require("../models/Address");

const addresses = [
  {
    "_id": "66571d1d9f4f3c140c51827c",
    "user": "664da19143b1e53d19881de6",
    "street": "badriraj nager 2nd lane",
    "city": "Berhampur",
    "state": "Odisha",
    "phoneNumber": "9861006347",
    "postalCode": "760001",
    "country": "India",
    "type": "Home",
    "__v": 0
  },
  {
    "_id": "66572955f71d8248c2521083",
    "user": "664da19143b1e53d19881de6",
    "street": "badriraj nager 2nd lane",
    "city": "Berhampur",
    "state": "Odisha",
    "phoneNumber": "8093293316",
    "postalCode": "760001",
    "country": "India",
    "type": "Bussiness",
    "__v": 0
  },
  {
    "_id": "66572a51f71d8248c25210a5",
    "user": "664da19143b1e53d19881de6",
    "street": "badriraj nager 2nd lane",
    "city": "Berhampur",
    "state": "Odisha",
    "phoneNumber": "9861006348",
    "postalCode": "760003",
    "country": "India",
    "type": "Home",
    "__v": 0
  },
  {
    "_id": "6658692fbab5dfa381b425a6",
    "user": "66586712d3b998b84cb2a502",
    "street": "badriraj nager 2nd lane",
    "city": "Berhampur",
    "state": "Odisha",
    "phoneNumber": "8093293316",
    "postalCode": "760001",
    "country": "India",
    "type": "Home",
    "__v": 0
  },
  {
    "_id": "6658698cbab5dfa381b425c5",
    "user": "66586712d3b998b84cb2a502",
    "street": "badriraj nager 2nd lane",
    "city": "All",
    "state": "near Gosaninuagan police station",
    "phoneNumber": "9861006347",
    "postalCode": "760003",
    "country": "India",
    "type": "Bussiness",
    "__v": 0
  },
  {
    "_id": "66613ac579232ecc6d3ca05c",
    "user": "665ea5b89d373fa0f9d4bdf9",
    "street": "badriraj nager 2nd lane",
    "city": "Berhampur",
    "state": "Odisha",
    "phoneNumber": "9861006347",
    "postalCode": "760001",
    "country": "India",
    "type": "Home",
    "__v": 0
  },
  {
    "_id": "66615a79751c3a412af15819",
    "user": "65c2526fdcd9253acfbaa731",
    "street": "badriraj nager 2nd lane",
    "city": "Berhampur",
    "state": "Odisha",
    "phoneNumber": "9861006347",
    "postalCode": "760001",
    "country": "India",
    "type": "Home",
    "__v": 0
  },
  {
    "_id": "6662a541f5468d65bb33e3a7",
    "user": "6661c80c5eae7eff9f40de4b",
    "street": "badriraj nager 2nd lane",
    "city": "Berhampur",
    "state": "Odisha",
    "phoneNumber": "9861006347",
    "postalCode": "760001",
    "country": "India",
    "type": "Home",
    "__v": 0,
    "name": "subham"
  },
  {
    "_id": "666be38554f1b6233e2b4bd9",
    "user": "6661c80c5eae7eff9f40de4b",
    "street": "housing Board",
    "city": "Berhampur",
    "state": "Odisha",
    "phoneNumber": "8093293316",
    "postalCode": "760001",
    "country": "India",
    "type": "Home",
    "__v": 0,
    "name": "kiran kumar"
  },
  {
    "_id": "666be3af54f1b6233e2b4bdf",
    "user": "6661c80c5eae7eff9f40de4b",
    "street": "PremNager 6th lane",
    "city": "Berhampur",
    "state": "Odisha",
    "phoneNumber": "9937901049",
    "postalCode": "760003",
    "country": "India",
    "type": "Bussiness",
    "__v": 0,
    "name": "Mukinder"
  },
  {
    "_id": "6672db541c2a5d11005f7f71",
    "user": "6661c80c5eae7eff9f40de4b",
    "name": "Pritam Rao",
    "street": "Golanthra",
    "city": "Berhampur",
    "state": "Odisha",
    "phoneNumber": "9861006347",
    "postalCode": "760003",
    "country": "India",
    "type": "Home",
    "__v": 0
  }
]

exports.seedAddress = async () => {
  try {
    await Address.insertMany(addresses);
    console.log("Address seeded successfully");
  } catch (error) {
    console.log(error);
  }
};
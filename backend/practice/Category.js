const Category = require("../models/Category");

const categories = 
  [
    {
      "_id": "65a7e24602e12c44f599442c",
      "name": "Smartphones",
      "img": "https://rukminim2.flixcart.com/flap/96/96/image/22fddf3c7da4c4f4.png?q=100",
      "__v": 0
    },
    {
      "_id": "65a7e24602e12c44f599442d",
      "name": "Laptops",
      "img": "https://rukminim2.flixcart.com/flap/96/96/image/69c6589653afdb9a.png?q=100",
      "__v": 0
    },
    {
      "_id": "65a7e24602e12c44f599442e",
      "name": "Fragrances",
      "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg09kgmZ78JeRoAj6lgUBnGWjVJqepovouRA&usqp=CAU",
      "__v": 0
    },
    {
      "_id": "65a7e24602e12c44f599442f",
      "name": "Skincare",
      "img": "https://m.media-amazon.com/images/I/615CsjLabfL._SX679_.jpg",
      "__v": 0
    },
    {
      "_id": "65a7e24602e12c44f5994430",
      "name": "Groceries",
      "img": "https://rukminim2.flixcart.com/flap/96/96/image/29327f40e9c4d26b.png?q=100",
      "__v": 0
    },
    {
      "_id": "65a7e24602e12c44f5994431",
      "name": "Furniture & Home",
      "img": "https://rukminim2.flixcart.com/flap/96/96/image/ab7e2b022a4587dd.jpg?q=100",
      "__v": 0
    },
    {
      "_id": "65a7e24602e12c44f599443b",
      "name": "Shoes",
      "img": "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png",
      "__v": 0
    },
    {
      "_id": "65a7e24602e12c44f599443c",
      "name": "Kitchen Accessories",
      "img": "https://m.media-amazon.com/images/I/71tI4VjGckL._SX679_.jpg",
      "__v": 0
    },
    {
      "_id": "65a7e24602e12c44f599443f",
      "name": "Sports",
      "img": "https://m.media-amazon.com/images/I/41OiDzLxR1L._SX300_SY300_QL70_FMwebp_.jpg",
      "__v": 0
    },
    {
      "_id": "664edb3a72080a83b4785e38",
      "name": "Fashion",
      "img": "https://rukminim2.flixcart.com/fk-p-flap/96/96/image/0d75b34f7d8fbcb3.png?q=100",
      "__v": 0
    },
    {
      "_id": "664ee145378c952f1d59287e",
      "name": "Watch",
      "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFL__eQFNIGhSBEhzVSWt7aJIsEi995CAicQ&usqp=CAU",
      "__v": 0
    },
    {
      "_id": "65a7e24602e12c44f599443d",
      "name": "Accessories",
      "__v": 0,
      "img": "https://m.media-amazon.com/images/I/81WaomQESKL._SX569_.jpg"
    }
  ]

exports.seedCategory = async () => {
  try {
    await Category.insertMany(categories);
    console.log("Category seeded successfully");
  } catch (error) {
    console.log(error);
  }
};
const Order = require("../models/Order");

const orders = [
  {
    "_id": "666403e654e91000241aa646",
    "user": "6661c80c5eae7eff9f40de4b",
    "item": [
      {
        "_id": "6663fe37bee56644a951b2b0",
        "user": "6661c80c5eae7eff9f40de4b",
        "product": {
          "_id": "65a7e45902e12c44f5994450",
          "title": "Samsung Universe 9",
          "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
          "price": 99920,
          "discountPercentage": 15.46,
          "category": "65a7e24602e12c44f599442c",
          "brand": {
            "_id": "65a7e20102e12c44f59943db",
            "name": "Samsung",
            "__v": 0
          },
          "stockQuantity": 36,
          "thumbnail": "https://cdn.dummyjson.com/product-images/3/thumbnail.jpg",
          "images": [
            "https://cdn.dummyjson.com/product-images/3/1.jpg"
          ],
          "isDeleted": false,
          "updatedAt": "2024-05-16T03:37:33.192Z",
          "createdAt": "2024-05-09T06:41:23.589Z"
        },
        "quantity": 1
      }
    ],
    "productsCount": 1,
    "address": "6662a541f5468d65bb33e3a7",
    "status": "Pending",
    "paymentMode": "COD",
    "total": 92925.6,
    "createdAt": "2024-06-08T07:10:30.982Z"
  },
  {
    "_id": "666403f654e91000241aa892",
    "user": "6661c80c5eae7eff9f40de4b",
    "item": [
      {
        "_id": "666403eb54e91000241aa864",
        "user": "6661c80c5eae7eff9f40de4b",
        "product": {
          "_id": "65a7e45902e12c44f5994453",
          "title": "MacBook Pro",
          "description": "MacBook Pro 2021 with mini-LED display may launch between September, November",
          "price": 139920,
          "discountPercentage": 11.02,
          "category": "65a7e24602e12c44f599442d",
          "brand": {
            "_id": "65a7e20102e12c44f59943da",
            "name": "Apple",
            "__v": 0
          },
          "stockQuantity": 83,
          "thumbnail": "https://cdn.dummyjson.com/product-images/6/thumbnail.png",
          "images": [
            "https://cdn.dummyjson.com/product-images/6/1.png",
            "https://cdn.dummyjson.com/product-images/6/2.jpg",
            "https://cdn.dummyjson.com/product-images/6/3.png",
            "https://cdn.dummyjson.com/product-images/6/4.jpg"
          ],
          "isDeleted": false,
          "updatedAt": "2024-05-16T03:37:33.192Z",
          "createdAt": "2024-05-09T06:41:23.590Z"
        },
        "quantity": 1
      },
      {
        "_id": "666403ec54e91000241aa869",
        "user": "6661c80c5eae7eff9f40de4b",
        "product": {
          "_id": "65a7e45902e12c44f5994454",
          "title": "Samsung Galaxy Book",
          "description": "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
          "price": 119920,
          "discountPercentage": 4.15,
          "category": "65a7e24602e12c44f599442d",
          "brand": {
            "_id": "65a7e20102e12c44f59943db",
            "name": "Samsung",
            "__v": 0
          },
          "stockQuantity": 50,
          "thumbnail": "https://cdn.dummyjson.com/product-images/7/thumbnail.jpg",
          "images": [
            "https://cdn.dummyjson.com/product-images/7/1.jpg",
            "https://cdn.dummyjson.com/product-images/7/2.jpg",
            "https://cdn.dummyjson.com/product-images/7/3.jpg",
            "https://cdn.dummyjson.com/product-images/7/thumbnail.jpg"
          ],
          "isDeleted": false,
          "updatedAt": "2024-05-16T03:37:33.192Z",
          "createdAt": "2024-05-09T06:41:23.590Z"
        },
        "quantity": 1
      },
      {
        "_id": "666403ed54e91000241aa86e",
        "user": "6661c80c5eae7eff9f40de4b",
        "product": {
          "_id": "65a7e45902e12c44f5994457",
          "title": "HP Pavilion 15-DK1056WM",
          "description": "HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10",
          "price": 87920,
          "discountPercentage": 6.18,
          "category": "65a7e24602e12c44f599442d",
          "brand": {
            "_id": "65a7e20102e12c44f59943e0",
            "name": "HP Pavilion",
            "__v": 0
          },
          "stockQuantity": 89,
          "thumbnail": "https://cdn.dummyjson.com/product-images/10/thumbnail.jpeg",
          "images": [
            "https://cdn.dummyjson.com/product-images/10/1.jpg",
            "https://cdn.dummyjson.com/product-images/10/2.jpg",
            "https://cdn.dummyjson.com/product-images/10/3.jpg",
            "https://cdn.dummyjson.com/product-images/10/thumbnail.jpeg"
          ],
          "isDeleted": false,
          "updatedAt": "2024-05-16T03:37:33.193Z",
          "createdAt": "2024-05-09T06:41:23.590Z"
        },
        "quantity": 1
      }
    ],
    "productsCount": 3,
    "address": "6662a541f5468d65bb33e3a7",
    "status": "Pending",
    "paymentMode": "UPI",
    "total": 323416.8,
    "createdAt": "2024-06-08T07:10:46.898Z"
  },
  {
    "_id": "66687a8741927310cdbcb64c",
    "user": "6661c80c5eae7eff9f40de4b",
    "item": [
      {
        "_id": "66687a7941927310cdbcb634",
        "user": "6661c80c5eae7eff9f40de4b",
        "product": {
          "_id": "65a7e45902e12c44f599445c",
          "title": "Eau De Perfume Spray",
          "description": "Genuine  Al-Rehab spray perfume from UAE/Saudi Arabia/Yemen High Quality",
          "price": 2400,
          "discountPercentage": 10.99,
          "category": "65a7e24602e12c44f599442e",
          "brand": {
            "_id": "65a7e20102e12c44f59943e5",
            "name": "Lord - Al-Rehab",
            "__v": 0
          },
          "stockQuantity": 105,
          "thumbnail": "https://cdn.dummyjson.com/product-images/15/thumbnail.jpg",
          "images": [
            "https://cdn.dummyjson.com/product-images/15/1.jpg",
            "https://cdn.dummyjson.com/product-images/15/2.jpg",
            "https://cdn.dummyjson.com/product-images/15/3.jpg",
            "https://cdn.dummyjson.com/product-images/15/4.jpg",
            "https://cdn.dummyjson.com/product-images/15/thumbnail.jpg"
          ],
          "isDeleted": false,
          "updatedAt": "2024-05-16T03:37:33.193Z",
          "createdAt": "2024-05-09T06:41:23.590Z"
        },
        "quantity": 1
      }
    ],
    "productsCount": 1,
    "address": "6662a541f5468d65bb33e3a7",
    "status": "Pending",
    "paymentMode": "CARD",
    "total": 2232,
    "createdAt": "2024-06-11T16:25:43.511Z"
  },
  {
    "_id": "66687bb741927310cdbcbd3d",
    "user": "6661c80c5eae7eff9f40de4b",
    "item": [
      {
        "_id": "66687bb041927310cdbcbd25",
        "user": "6661c80c5eae7eff9f40de4b",
        "product": {
          "_id": "65a7e45902e12c44f5994494",
          "title": "Women Shoulder Bags",
          "description": "LouisWill Women Shoulder Bags Long Clutches Cross Body Bags Phone Bags PU Leather Hand Bags Large Capacity Card Holders Zipper Coin Purses Fashion Crossbody Bags for Girls Ladies",
          "price": 3680,
          "discountPercentage": 14.65,
          "category": "65a7e24602e12c44f599443a",
          "brand": {
            "_id": "65a7e20102e12c44f5994413",
            "name": "LouisWill",
            "__v": 0
          },
          "stockQuantity": 17,
          "thumbnail": "https://cdn.dummyjson.com/product-images/71/thumbnail.jpg",
          "images": [
            "https://cdn.dummyjson.com/product-images/71/1.jpg",
            "https://cdn.dummyjson.com/product-images/71/2.jpg",
            "https://cdn.dummyjson.com/product-images/71/3.webp",
            "https://cdn.dummyjson.com/product-images/71/thumbnail.jpg"
          ],
          "isDeleted": false,
          "updatedAt": "2024-05-16T03:37:33.195Z",
          "createdAt": "2024-05-09T06:41:23.593Z"
        },
        "quantity": 1
      }
    ],
    "productsCount": 1,
    "address": "6662a541f5468d65bb33e3a7",
    "status": "Pending",
    "paymentMode": "COD",
    "total": 3422.4,
    "createdAt": "2024-06-11T16:30:47.683Z"
  },
  {
    "_id": "666bef400a6009c504b3125a",
    "user": "6661c80c5eae7eff9f40de4b",
    "item": [
      {
        "_id": "666be7d40a6009c504b3004c",
        "user": "6661c80c5eae7eff9f40de4b",
        "product": {
          "_id": "65a7e45902e12c44f5994452",
          "title": "Huawei P30",
          "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
          "price": 39920,
          "discountPercentage": 10.58,
          "category": "65a7e24602e12c44f599442c",
          "brand": {
            "_id": "65a7e20102e12c44f59943dd",
            "name": "Huawei",
            "__v": 0
          },
          "stockQuantity": 32,
          "thumbnail": "https://cdn.dummyjson.com/product-images/5/thumbnail.jpg",
          "images": [
            "https://cdn.dummyjson.com/product-images/5/1.jpg",
            "https://cdn.dummyjson.com/product-images/5/2.jpg",
            "https://cdn.dummyjson.com/product-images/5/3.jpg"
          ],
          "isDeleted": false,
          "updatedAt": "2024-05-16T03:37:33.192Z",
          "createdAt": "2024-05-09T06:41:23.590Z"
        },
        "quantity": 1
      },
      {
        "_id": "666be8180a6009c504b30382",
        "user": "6661c80c5eae7eff9f40de4b",
        "product": {
          "_id": "65a7e45902e12c44f5994458",
          "title": "perfume Oil",
          "description": "Mega Discount, Impression of Acqua Di Gio by GiorgioArmani concentrated attar perfume Oil",
          "price": 1040,
          "discountPercentage": 8.4,
          "category": "65a7e24602e12c44f599442e",
          "brand": {
            "_id": "65a7e20102e12c44f59943e1",
            "name": "Impression of Acqua Di Gio",
            "__v": 0
          },
          "stockQuantity": 65,
          "thumbnail": "https://cdn.dummyjson.com/product-images/11/thumbnail.jpg",
          "images": [
            "https://cdn.dummyjson.com/product-images/11/1.jpg",
            "https://cdn.dummyjson.com/product-images/11/2.jpg",
            "https://cdn.dummyjson.com/product-images/11/3.jpg",
            "https://cdn.dummyjson.com/product-images/11/thumbnail.jpg"
          ],
          "isDeleted": false,
          "updatedAt": "2024-05-16T03:37:33.193Z",
          "createdAt": "2024-05-09T06:41:23.590Z"
        },
        "quantity": 1
      },
      {
        "_id": "666be8220a6009c504b30397",
        "user": "6661c80c5eae7eff9f40de4b",
        "product": {
          "_id": "65a7e45902e12c44f5994457",
          "title": "HP Pavilion 15-DK1056WM",
          "description": "HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10",
          "price": 87920,
          "discountPercentage": 6.18,
          "category": "65a7e24602e12c44f599442d",
          "brand": {
            "_id": "65a7e20102e12c44f59943e0",
            "name": "HP Pavilion",
            "__v": 0
          },
          "stockQuantity": 89,
          "thumbnail": "https://cdn.dummyjson.com/product-images/10/thumbnail.jpeg",
          "images": [
            "https://cdn.dummyjson.com/product-images/10/1.jpg",
            "https://cdn.dummyjson.com/product-images/10/2.jpg",
            "https://cdn.dummyjson.com/product-images/10/3.jpg",
            "https://cdn.dummyjson.com/product-images/10/thumbnail.jpeg"
          ],
          "isDeleted": false,
          "updatedAt": "2024-05-16T03:37:33.193Z",
          "createdAt": "2024-05-09T06:41:23.590Z"
        },
        "quantity": 1
      },
      {
        "_id": "666be8400a6009c504b306e6",
        "user": "6661c80c5eae7eff9f40de4b",
        "product": {
          "_id": "65a7e45902e12c44f5994464",
          "title": "Orange Essence Food Flavou",
          "description": "Specifications of Orange Essence Food Flavour For Cakes and Baking Food Item",
          "price": 1120,
          "discountPercentage": 8.04,
          "category": "65a7e24602e12c44f5994430",
          "brand": {
            "_id": "65a7e20102e12c44f59943ed",
            "name": "Baking Food Items",
            "__v": 0
          },
          "stockQuantity": 26,
          "thumbnail": "https://cdn.dummyjson.com/product-images/23/thumbnail.jpg",
          "images": [
            "https://cdn.dummyjson.com/product-images/23/1.jpg",
            "https://cdn.dummyjson.com/product-images/23/2.jpg",
            "https://cdn.dummyjson.com/product-images/23/3.jpg",
            "https://cdn.dummyjson.com/product-images/23/4.jpg",
            "https://cdn.dummyjson.com/product-images/23/thumbnail.jpg"
          ],
          "isDeleted": false,
          "updatedAt": "2024-05-16T03:37:33.193Z",
          "createdAt": "2024-05-09T06:41:23.591Z"
        },
        "quantity": 1
      }
    ],
    "productsCount": 4,
    "address": "666be38554f1b6233e2b4bd9",
    "status": "Pending",
    "paymentMode": "UPI",
    "total": 120900,
    "createdAt": "2024-06-14T07:20:32.456Z"
  }
]

exports.seedOrder = async () => {
  try {
    await Order.insertMany(orders);
    console.log("Orders seeded successfully");
  } catch (error) {
    console.log(error);
  }
};
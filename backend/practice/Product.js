const Product = require("../models/Product");

const products = [
  {
    "_id": "65a7e45902e12c44f599444e",
    "title": "iPhone 9",
    "description": "An apple mobile which is nothing like apple",
    "price": 43920,
    "discountPercentage": 12.96,
    "category": "65a7e24602e12c44f599442c",
    "brand": "65a7e20102e12c44f59943da",
    "stockQuantity": 14,
    "thumbnail": "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
    "images": [
      "https://cdn.dummyjson.com/product-images/1/1.jpg",
      "https://cdn.dummyjson.com/product-images/1/2.jpg",
      "https://cdn.dummyjson.com/product-images/1/3.jpg",
      "https://cdn.dummyjson.com/product-images/1/4.jpg",
      "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"
    ],
    "isDeleted": false,
    "updatedAt": "2024-05-16T03:37:33.192Z",
    "createdAt": "2024-05-09T06:41:23.589Z"
  },
  {
    "_id": "65a7e45902e12c44f599444f",
    "title": "Fog Scent Xpressio Perfume custom",
    "description": "Product details of Best Fog Scent Xpressio Perfume 100ml For Men cool long lasting perfumes for Men",
    "price": 1040,
    "discountPercentage": 8.14,
    "category": "65a7e24602e12c44f599442e",
    "brand": "65a7e20102e12c44f59943e3",
    "stockQuantity": 21,
    "thumbnail": "https://cdn.dummyjson.com/product-images/13/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/13/1.jpg",
      "https://cdn.dummyjson.com/product-images/13/2.png",
      "https://cdn.dummyjson.com/product-images/13/3.jpg",
      "https://cdn.dummyjson.com/product-images/13/4.jpg"
    ],
    "isDeleted": false,
    "updatedAt": "2024-05-16T03:37:33.192Z",
    "createdAt": "2024-05-09T06:41:23.589Z"
  },
  {
    "_id": "65a7e45902e12c44f5994450",
    "title": "Samsung Universe 9",
    "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
    "price": 99920,
    "discountPercentage": 15.46,
    "category": "65a7e24602e12c44f599442c",
    "brand": "65a7e20102e12c44f59943db",
    "stockQuantity": 36,
    "thumbnail": "https://cdn.dummyjson.com/product-images/3/thumbnail.jpg",
    "images": [
      "https://cdn.dummyjson.com/product-images/3/1.jpg"
    ],
    "isDeleted": false,
    "updatedAt": "2024-05-16T03:37:33.192Z",
    "createdAt": "2024-05-09T06:41:23.589Z"
  },
  {
    "_id": "65a7e45902e12c44f5994451",
    "title": "OPPOF19",
    "description": "OPPO F19 is officially announced on April 2021.",
    "price": 22400,
    "discountPercentage": 17.91,
    "category": "65a7e24602e12c44f599442c",
    "brand": "65a7e20102e12c44f59943dc",
    "stockQuantity": 123,
    "thumbnail": "https://cdn.dummyjson.com/product-images/4/thumbnail.jpg",
    "images": [
      "https://cdn.dummyjson.com/product-images/4/1.jpg",
      "https://cdn.dummyjson.com/product-images/4/2.jpg",
      "https://cdn.dummyjson.com/product-images/4/3.jpg",
      "https://cdn.dummyjson.com/product-images/4/4.jpg",
      "https://cdn.dummyjson.com/product-images/4/thumbnail.jpg"
    ],
    "isDeleted": false,
    "updatedAt": "2024-05-16T03:37:33.192Z",
    "createdAt": "2024-05-09T06:41:23.589Z"
  },
  {
    "_id": "65a7e45902e12c44f5994452",
    "title": "Huawei P30",
    "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
    "price": 39920,
    "discountPercentage": 10.58,
    "category": "65a7e24602e12c44f599442c",
    "brand": "65a7e20102e12c44f59943dd",
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
  {
    "_id": "65a7e45902e12c44f5994453",
    "title": "MacBook Pro",
    "description": "MacBook Pro 2021 with mini-LED display may launch between September, November",
    "price": 139920,
    "discountPercentage": 11.02,
    "category": "65a7e24602e12c44f599442d",
    "brand": "65a7e20102e12c44f59943da",
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
  {
    "_id": "65a7e45902e12c44f5994454",
    "title": "Samsung Galaxy Book",
    "description": "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
    "price": 119920,
    "discountPercentage": 4.15,
    "category": "65a7e24602e12c44f599442d",
    "brand": "65a7e20102e12c44f59943db",
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
  {
    "_id": "65a7e45902e12c44f5994455",
    "title": "Microsoft Surface Laptop 4",
    "description": "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
    "price": 119920,
    "discountPercentage": 10.23,
    "category": "65a7e24602e12c44f599442d",
    "brand": "65a7e20102e12c44f59943de",
    "stockQuantity": 68,
    "thumbnail": "https://cdn.dummyjson.com/product-images/8/thumbnail.jpg",
    "images": [
      "https://cdn.dummyjson.com/product-images/8/1.jpg",
      "https://cdn.dummyjson.com/product-images/8/2.jpg",
      "https://cdn.dummyjson.com/product-images/8/3.jpg",
      "https://cdn.dummyjson.com/product-images/8/4.jpg",
      "https://cdn.dummyjson.com/product-images/8/thumbnail.jpg"
    ],
    "isDeleted": false,
    "updatedAt": "2024-05-16T03:37:33.192Z",
    "createdAt": "2024-05-09T06:41:23.590Z"
  },
  {
    "_id": "65a7e45902e12c44f5994456",
    "title": "Infinix INBOOK",
    "description": "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty",
    "price": 87920,
    "discountPercentage": 11.83,
    "category": "65a7e24602e12c44f599442d",
    "brand": "65a7e20102e12c44f59943df",
    "stockQuantity": 96,
    "thumbnail": "https://cdn.dummyjson.com/product-images/9/thumbnail.jpg",
    "images": [
      "https://cdn.dummyjson.com/product-images/9/1.jpg",
      "https://cdn.dummyjson.com/product-images/9/2.png",
      "https://cdn.dummyjson.com/product-images/9/3.png",
      "https://cdn.dummyjson.com/product-images/9/4.jpg",
      "https://cdn.dummyjson.com/product-images/9/thumbnail.jpg"
    ],
    "isDeleted": false,
    "updatedAt": "2024-05-16T03:37:33.192Z",
    "createdAt": "2024-05-09T06:41:23.590Z"
  },
  {
    "_id": "65a7e45902e12c44f5994457",
    "title": "HP Pavilion 15-DK1056WM",
    "description": "HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10",
    "price": 87920,
    "discountPercentage": 6.18,
    "category": "65a7e24602e12c44f599442d",
    "brand": "65a7e20102e12c44f59943e0",
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
  {
    "_id": "65a7e45902e12c44f5994458",
    "title": "perfume Oil",
    "description": "Mega Discount, Impression of Acqua Di Gio by GiorgioArmani concentrated attar perfume Oil",
    "price": 1040,
    "discountPercentage": 8.4,
    "category": "65a7e24602e12c44f599442e",
    "brand": "65a7e20102e12c44f59943e1",
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
  {
    "_id": "65a7e45902e12c44f5994459",
    "title": "Brown Perfume",
    "description": "Royal_Mirage Sport Brown Perfume for Men & Women - 120ml",
    "price": 3200,
    "discountPercentage": 15.66,
    "category": "65a7e24602e12c44f599442e",
    "brand": "65a7e20102e12c44f59943e2",
    "stockQuantity": 52,
    "thumbnail": "https://cdn.dummyjson.com/product-images/12/thumbnail.jpg",
    "images": [
      "https://cdn.dummyjson.com/product-images/12/1.jpg",
      "https://cdn.dummyjson.com/product-images/12/2.jpg",
      "https://cdn.dummyjson.com/product-images/12/3.png",
      "https://cdn.dummyjson.com/product-images/12/4.jpg",
      "https://cdn.dummyjson.com/product-images/12/thumbnail.jpg"
    ],
    "isDeleted": false,
    "updatedAt": "2024-05-16T03:37:33.193Z",
    "createdAt": "2024-05-09T06:41:23.590Z"
  },
  {
    "_id": "65a7e45902e12c44f599445a",
    "title": "Fog Scent Xpressio Perfume",
    "description": "Product details of Best Fog Scent Xpressio Perfume 100ml For Men cool long lasting perfumes for Men",
    "price": 1040,
    "discountPercentage": 8.14,
    "category": "65a7e24602e12c44f599442e",
    "brand": "65a7e20102e12c44f59943e3",
    "stockQuantity": 61,
    "thumbnail": "https://cdn.dummyjson.com/product-images/13/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/13/1.jpg",
      "https://cdn.dummyjson.com/product-images/13/2.png",
      "https://cdn.dummyjson.com/product-images/13/3.jpg",
      "https://cdn.dummyjson.com/product-images/13/4.jpg",
      "https://cdn.dummyjson.com/product-images/13/thumbnail.webp"
    ],
    "isDeleted": false,
    "updatedAt": "2024-05-16T03:37:33.193Z",
    "createdAt": "2024-05-09T06:41:23.590Z"
  },
  {
    "_id": "65a7e45902e12c44f599445b",
    "title": "Non-Alcoholic Concentrated Perfume Oil",
    "description": "Original Al Munakh® by Mahal Al Musk | Our Impression of Climate | 6ml Non-Alcoholic Concentrated Perfume Oil",
    "price": 9600,
    "discountPercentage": 15.6,
    "category": "65a7e24602e12c44f599442e",
    "brand": "65a7e20102e12c44f59943e4",
    "stockQuantity": 114,
    "thumbnail": "https://cdn.dummyjson.com/product-images/14/thumbnail.jpg",
    "images": [
      "https://cdn.dummyjson.com/product-images/14/1.jpg",
      "https://cdn.dummyjson.com/product-images/14/2.jpg",
      "https://cdn.dummyjson.com/product-images/14/3.jpg",
      "https://cdn.dummyjson.com/product-images/14/thumbnail.jpg"
    ],
    "isDeleted": false,
    "updatedAt": "2024-05-16T03:37:33.193Z",
    "createdAt": "2024-05-09T06:41:23.590Z"
  },
  {
    "_id": "65a7e45902e12c44f599445c",
    "title": "Eau De Perfume Spray",
    "description": "Genuine  Al-Rehab spray perfume from UAE/Saudi Arabia/Yemen High Quality",
    "price": 2400,
    "discountPercentage": 10.99,
    "category": "65a7e24602e12c44f599442e",
    "brand": "65a7e20102e12c44f59943e5",
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
  {
    "_id": "65a7e45902e12c44f599445d",
    "title": "Hyaluronic Acid Serum",
    "description": "L'OrÃ©al Paris introduces Hyaluron Expert Replumping Serum formulated with 1.5% Hyaluronic Acid",
    "price": 1520,
    "discountPercentage": 13.31,
    "category": "65a7e24602e12c44f599442f",
    "brand": "65a7e20102e12c44f59943e6",
    "stockQuantity": 110,
    "thumbnail": "https://cdn.dummyjson.com/product-images/16/thumbnail.jpg",
    "images": [
      "https://cdn.dummyjson.com/product-images/16/1.png",
      "https://cdn.dummyjson.com/product-images/16/2.webp",
      "https://cdn.dummyjson.com/product-images/16/3.jpg",
      "https://cdn.dummyjson.com/product-images/16/4.jpg",
      "https://cdn.dummyjson.com/product-images/16/thumbnail.jpg"
    ],
    "isDeleted": false,
    "updatedAt": "2024-05-16T03:37:33.193Z",
    "createdAt": "2024-05-09T06:41:23.590Z"
  },
  {
    "_id": "65a7e45902e12c44f599445e",
    "title": "Tree Oil 30ml",
    "description": "Tea tree oil contains a number of compounds, including terpinen-4-ol, that have been shown to kill certain bacteria,",
    "price": 960,
    "discountPercentage": 4.09,
    "category": "65a7e24602e12c44f599442f",
    "brand": "65a7e20102e12c44f59943e7",
    "stockQuantity": 78,
    "thumbnail": "https://cdn.dummyjson.com/product-images/17/thumbnail.jpg",
    "images": [
      "https://cdn.dummyjson.com/product-images/17/1.jpg",
      "https://cdn.dummyjson.com/product-images/17/2.jpg",
      "https://cdn.dummyjson.com/product-images/17/3.jpg",
      "https://cdn.dummyjson.com/product-images/17/thumbnail.jpg"
    ],
    "isDeleted": false,
    "updatedAt": "2024-05-16T03:37:33.193Z",
    "createdAt": "2024-05-09T06:41:23.590Z"
  },
  {
    "_id": "65a7e45902e12c44f599445f",
    "title": "Oil Free Moisturizer 100ml",
    "description": "Dermive Oil Free Moisturizer with SPF 20 is specifically formulated with ceramides, hyaluronic acid & sunscreen.",
    "price": 3200,
    "discountPercentage": 13.1,
    "category": "65a7e24602e12c44f599442f",
    "brand": "65a7e20102e12c44f59943e8",
    "stockQuantity": 88,
    "thumbnail": "https://cdn.dummyjson.com/product-images/18/thumbnail.jpg",
    "images": [
      "https://cdn.dummyjson.com/product-images/18/1.jpg",
      "https://cdn.dummyjson.com/product-images/18/2.jpg",
      "https://cdn.dummyjson.com/product-images/18/3.jpg",
      "https://cdn.dummyjson.com/product-images/18/4.jpg",
      "https://cdn.dummyjson.com/product-images/18/thumbnail.jpg"
    ],
    "isDeleted": false,
    "updatedAt": "2024-05-16T03:37:33.193Z",
    "createdAt": "2024-05-09T06:41:23.590Z"
  },
  {
    "_id": "65a7e45902e12c44f5994460",
    "title": "Skin Beauty Serum.",
    "description": "Product name: rorec collagen hyaluronic acid white face serum riceNet weight: 15 m",
    "price": 3680,
    "discountPercentage": 10.68,
    "category": "65a7e24602e12c44f599442f",
    "brand": "65a7e20102e12c44f59943e9",
    "stockQuantity": 54,
    "thumbnail": "https://cdn.dummyjson.com/product-images/19/thumbnail.jpg",
    "images": [
      "https://cdn.dummyjson.com/product-images/19/1.jpg",
      "https://cdn.dummyjson.com/product-images/19/2.jpg",
      "https://cdn.dummyjson.com/product-images/19/3.png",
      "https://cdn.dummyjson.com/product-images/19/thumbnail.jpg"
    ],
    "isDeleted": false,
    "updatedAt": "2024-05-16T03:37:33.193Z",
    "createdAt": "2024-05-09T06:41:23.590Z"
  },
  {
    "_id": "65a7e45902e12c44f5994461",
    "title": "Freckle Treatment Cream- 15gm",
    "description": "Fair & Clear is Pakistan's only pure Freckle cream which helpsfade Freckles, Darkspots and pigments. Mercury level is 0%, so there are no side effects.",
    "price": 5600,
    "discountPercentage": 16.99,
    "category": "65a7e24602e12c44f599442f",
    "brand": "65a7e20102e12c44f59943ea",
    "stockQuantity": 140,
    "thumbnail": "https://cdn.dummyjson.com/product-images/20/thumbnail.jpg",
    "images": [
      "https://cdn.dummyjson.com/product-images/20/1.jpg",
      "https://cdn.dummyjson.com/product-images/20/2.jpg",
      "https://cdn.dummyjson.com/product-images/20/3.jpg",
      "https://cdn.dummyjson.com/product-images/20/4.jpg",
      "https://cdn.dummyjson.com/product-images/20/thumbnail.jpg"
    ],
    "isDeleted": false,
    "updatedAt": "2024-05-16T03:37:33.193Z",
    "createdAt": "2024-05-09T06:41:23.590Z"
  },
  {
    "_id": "65a7e45902e12c44f5994462",
    "title": "- Daal Masoor 500 grams",
    "description": "Fine quality Branded Product Keep in a cool and dry place",
    "price": 1600,
    "discountPercentage": 4.81,
    "category": "65a7e24602e12c44f5994430",
    "brand": "65a7e20102e12c44f59943eb",
    "stockQuantity": 133,
    "thumbnail": "https://cdn.dummyjson.com/product-images/21/thumbnail.png",
    "images": [
      "https://cdn.dummyjson.com/product-images/21/1.png",
      "https://cdn.dummyjson.com/product-images/21/2.jpg",
      "https://cdn.dummyjson.com/product-images/21/3.jpg"
    ],
    "isDeleted": false,
    "updatedAt": "2024-05-16T03:37:33.193Z",
    "createdAt": "2024-05-09T06:41:23.590Z"
  },
  {
    "_id": "65a7e45902e12c44f5994463",
    "title": "Elbow Macaroni - 400 gm",
    "description": "Product details of Bake Parlor Big Elbow Macaroni - 400 gm",
    "price": 1120,
    "discountPercentage": 15.58,
    "category": "65a7e24602e12c44f5994430",
    "brand": "65a7e20102e12c44f59943ec",
    "stockQuantity": 146,
    "thumbnail": "https://cdn.dummyjson.com/product-images/22/thumbnail.jpg",
    "images": [
      "https://cdn.dummyjson.com/product-images/22/1.jpg",
      "https://cdn.dummyjson.com/product-images/22/2.jpg",
      "https://cdn.dummyjson.com/product-images/22/3.jpg"
    ],
    "isDeleted": false,
    "updatedAt": "2024-05-16T03:37:33.193Z",
    "createdAt": "2024-05-09T06:41:23.591Z"
  },
  {
    "_id": "65a7e45902e12c44f5994464",
    "title": "Orange Essence Food Flavou",
    "description": "Specifications of Orange Essence Food Flavour For Cakes and Baking Food Item",
    "price": 1120,
    "discountPercentage": 8.04,
    "category": "65a7e24602e12c44f5994430",
    "brand": "65a7e20102e12c44f59943ed",
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
  {
    "_id": "65a7e45902e12c44f5994465",
    "title": "cereals muesli fruit nuts",
    "description": "original fauji cereal muesli 250gm box pack original fauji cereals muesli fruit nuts flakes breakfast cereal break fast faujicereals cerels cerel foji fouji",
    "price": 3680,
    "discountPercentage": 16.8,
    "category": "65a7e24602e12c44f5994430",
    "brand": "65a7e20102e12c44f59943ee",
    "stockQuantity": 113,
    "thumbnail": "https://cdn.dummyjson.com/product-images/24/thumbnail.jpg",
    "images": [
      "https://cdn.dummyjson.com/product-images/24/1.jpg",
      "https://cdn.dummyjson.com/product-images/24/2.jpg",
      "https://cdn.dummyjson.com/product-images/24/3.jpg",
      "https://cdn.dummyjson.com/product-images/24/4.jpg",
      "https://cdn.dummyjson.com/product-images/24/thumbnail.jpg"
    ],
    "isDeleted": false,
    "updatedAt": "2024-05-16T03:37:33.193Z",
    "createdAt": "2024-05-09T06:41:23.591Z"
  },
  {
    "_id": "65a7e45902e12c44f5994466",
    "title": "Gulab Powder 50 Gram",
    "description": "Dry Rose Flower Powder Gulab Powder 50 Gram • Treats Wounds",
    "price": 5600,
    "discountPercentage": 13.58,
    "category": "65a7e24602e12c44f5994430",
    "brand": "65a7e20102e12c44f59943ef",
    "stockQuantity": 47,
    "thumbnail": "https://cdn.dummyjson.com/product-images/25/thumbnail.jpg",
    "images": [
      "https://cdn.dummyjson.com/product-images/25/1.png",
      "https://cdn.dummyjson.com/product-images/25/2.jpg",
      "https://cdn.dummyjson.com/product-images/25/3.png",
      "https://cdn.dummyjson.com/product-images/25/4.jpg",
      "https://cdn.dummyjson.com/product-images/25/thumbnail.jpg"
    ],
    "isDeleted": false,
    "updatedAt": "2024-05-16T03:37:33.194Z",
    "createdAt": "2024-05-09T06:41:23.591Z"
  },
  {
    "_id": "65a7e45902e12c44f5994467",
    "title": "Plant Hanger For Home",
    "description": "Boho Decor Plant Hanger For Home Wall Decoration Macrame Wall Hanging Shelf",
    "price": 3280,
    "discountPercentage": 17.86,
    "category": "65a7e24602e12c44f5994431",
    "brand": "65a7e20102e12c44f59943f0",
    "stockQuantity": 131,
    "thumbnail": "https://cdn.dummyjson.com/product-images/26/thumbnail.jpg",
    "images": [
      "https://cdn.dummyjson.com/product-images/26/1.jpg",
      "https://cdn.dummyjson.com/product-images/26/2.jpg",
      "https://cdn.dummyjson.com/product-images/26/3.jpg",
      "https://cdn.dummyjson.com/product-images/26/4.jpg",
      "https://cdn.dummyjson.com/product-images/26/5.jpg",
      "https://cdn.dummyjson.com/product-images/26/thumbnail.jpg"
    ],
    "isDeleted": false,
    "updatedAt": "2024-05-16T03:37:33.194Z",
    "createdAt": "2024-05-09T06:41:23.591Z"
  },
  {
    "_id": "65a7e45902e12c44f5994468",
    "title": "Flying Wooden Bird",
    "description": "Package Include 6 Birds with Adhesive Tape Shape: 3D Shaped Wooden Birds Material: Wooden MDF, Laminated 3.5mm",
    "price": 4080,
    "discountPercentage": 15.58,
    "category": "65a7e24602e12c44f5994431",
    "brand": "65a7e20102e12c44f59943f1",
    "stockQuantity": 17,
    "thumbnail": "https://cdn.dummyjson.com/product-images/27/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/27/1.jpg",
      "https://cdn.dummyjson.com/product-images/27/2.jpg",
      "https://cdn.dummyjson.com/product-images/27/3.jpg",
      "https://cdn.dummyjson.com/product-images/27/4.jpg",
      "https://cdn.dummyjson.com/product-images/27/thumbnail.webp"
    ],
    "isDeleted": false,
    "updatedAt": "2024-05-16T03:37:33.194Z",
    "createdAt": "2024-05-09T06:41:23.591Z"
  },
  {
    "_id": "65a7e45902e12c44f5994469",
    "title": "3D Embellishment Art Lamp",
    "description": "3D led lamp sticker Wall sticker 3d wall art light on/off button  cell operated (included)",
    "price": 1600,
    "discountPercentage": 16.49,
    "category": "65a7e24602e12c44f5994431",
    "brand": "65a7e20102e12c44f59943f2",
    "stockQuantity": 54,
    "thumbnail": "https://cdn.dummyjson.com/product-images/28/thumbnail.jpg",
    "images": [
      "https://cdn.dummyjson.com/product-images/28/1.jpg",
      "https://cdn.dummyjson.com/product-images/28/2.jpg",
      "https://cdn.dummyjson.com/product-images/28/3.png",
      "https://cdn.dummyjson.com/product-images/28/4.jpg",
      "https://cdn.dummyjson.com/product-images/28/thumbnail.jpg"
    ],
    "isDeleted": false,
    "updatedAt": "2024-05-16T03:37:33.194Z",
    "createdAt": "2024-05-09T06:41:23.591Z"
  },
  {
    "_id": "65a7e45902e12c44f599446a",
    "title": "Handcraft Chinese style",
    "description": "Handcraft Chinese style art luxury palace hotel villa mansion home decor ceramic vase with brass fruit plate",
    "price": 4800,
    "discountPercentage": 15.34,
    "category": "65a7e24602e12c44f5994431",
    "brand": "65a7e20102e12c44f59943f3",
    "stockQuantity": 7,
    "thumbnail": "https://cdn.dummyjson.com/product-images/29/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/29/1.jpg",
      "https://cdn.dummyjson.com/product-images/29/2.jpg",
      "https://cdn.dummyjson.com/product-images/29/3.webp",
      "https://cdn.dummyjson.com/product-images/29/4.webp",
      "https://cdn.dummyjson.com/product-images/29/thumbnail.webp"
    ],
    "isDeleted": false,
    "updatedAt": "2024-05-16T03:37:33.194Z",
    "createdAt": "2024-05-09T06:41:23.591Z"
  },
  {
    "_id": "65a7e45902e12c44f599446b",
    "title": "Key Holder",
    "description": "Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality",
    "price": 2400,
    "discountPercentage": 2.92,
    "category": "65a7e24602e12c44f5994431",
    "brand": "65a7e20102e12c44f59943f4",
    "stockQuantity": 54,
    "thumbnail": "https://cdn.dummyjson.com/product-images/30/thumbnail.jpg",
    "images": [
      "https://cdn.dummyjson.com/product-images/30/1.jpg",
      "https://cdn.dummyjson.com/product-images/30/2.jpg",
      "https://cdn.dummyjson.com/product-images/30/3.jpg",
      "https://cdn.dummyjson.com/product-images/30/thumbnail.jpg"
    ],
    "isDeleted": false,
    "updatedAt": "2024-05-16T03:37:33.194Z",
    "createdAt": "2024-05-09T06:41:23.591Z"
  },
  {
    "_id": "65a7e45902e12c44f599446c",
    "title": "Mornadi Velvet Bed",
    "description": "Mornadi Velvet Bed Base with Headboard Slats Support Classic Style Bedroom Furniture Bed Set",
    "price": 3200,
    "discountPercentage": 17,
    "category": "65a7e24602e12c44f5994431",
    "brand": "65a7e20102e12c44f59943f5",
    "stockQuantity": 140,
    "thumbnail": "https://cdn.dummyjson.com/product-images/31/thumbnail.jpg",
    "images": [
      "https://cdn.dummyjson.com/product-images/31/1.jpg",
      "https://cdn.dummyjson.com/product-images/31/2.jpg",
      "https://cdn.dummyjson.com/product-images/31/3.jpg",
      "https://cdn.dummyjson.com/product-images/31/4.jpg",
      "https://cdn.dummyjson.com/product-images/31/thumbnail.jpg"
    ],
    "isDeleted": false,
    "updatedAt": "2024-05-16T03:37:33.194Z",
    "createdAt": "2024-05-09T06:41:23.591Z"
  },
  {
    "_id": "65a7e45902e12c44f599446d",
    "title": "Sofa for Coffe Cafe",
    "description": "Ratttan Outdoor furniture Set Waterproof  Rattan Sofa for Coffe Cafe",
    "price": 4000,
    "discountPercentage": 15.59,
    "category": "65a7e24602e12c44f5994431",
    "brand": "65a7e20102e12c44f59943f6",
    "stockQuantity": 30,
    "thumbnail": "https://cdn.dummyjson.com/product-images/32/thumbnail.jpg",
    "images": [
      "https://cdn.dummyjson.com/product-images/32/1.jpg",
      "https://cdn.dummyjson.com/product-images/32/2.jpg",
      "https://cdn.dummyjson.com/product-images/32/3.jpg",
      "https://cdn.dummyjson.com/product-images/32/thumbnail.jpg"
    ],
    "isDeleted": false,
    "updatedAt": "2024-05-16T03:37:33.194Z",
    "createdAt": "2024-05-09T06:41:23.591Z"
  },
  {
    "_id": "65a7e45902e12c44f599446e",
    "title": "3 Tier Corner Shelves",
    "description": "3 Tier Corner Shelves | 3 PCs Wall Mount Kitchen Shelf | Floating Bedroom Shelf",
    "price": 56000,
    "discountPercentage": 17,
    "category": "65a7e24602e12c44f5994431",
    "brand": "65a7e20102e12c44f59943f7",
    "stockQuantity": 106,
    "thumbnail": "https://cdn.dummyjson.com/product-images/33/thumbnail.jpg",
    "images": [
      "https://cdn.dummyjson.com/product-images/33/1.jpg",
      "https://cdn.dummyjson.com/product-images/33/2.jpg",
      "https://cdn.dummyjson.com/product-images/33/3.jpg",
      "https://cdn.dummyjson.com/product-images/33/4.jpg",
      "https://cdn.dummyjson.com/product-images/33/thumbnail.jpg"
    ],
    "isDeleted": false,
    "updatedAt": "2024-05-16T03:37:33.194Z",
    "createdAt": "2024-05-09T06:41:23.591Z"
  },
  {
    "_id": "65a7e45902e12c44f599446f",
    "title": "Plastic Table",
    "description": "V﻿ery good quality plastic table for multi purpose now in reasonable price",
    "price": 4000,
    "discountPercentage": 4,
    "category": "65a7e24602e12c44f5994431",
    "brand": "65a7e20102e12c44f59943f8",
    "stockQuantity": 136,
    "thumbnail": "https://cdn.dummyjson.com/product-images/34/thumbnail.jpg",
    "images": [
      "https://cdn.dummyjson.com/product-images/34/1.jpg",
      "https://cdn.dummyjson.com/product-images/34/2.jpg",
      "https://cdn.dummyjson.com/product-images/34/3.jpg",
      "https://cdn.dummyjson.com/product-images/34/4.jpg",
      "https://cdn.dummyjson.com/product-images/34/thumbnail.jpg"
    ],
    "isDeleted": false,
    "updatedAt": "2024-05-16T03:37:33.194Z",
    "createdAt": "2024-05-09T06:41:23.591Z"
  },
  {
    "_id": "65a7e45902e12c44f5994470",
    "title": "3 DOOR PORTABLE",
    "description": "Material: Stainless Steel and Fabric  Item Size: 110 cm x 45 cm x 175 cm Package Contents: 1 Storage Wardrobe",
    "price": 3280,
    "discountPercentage": 7.98,
    "category": "65a7e24602e12c44f5994431",
    "brand": "65a7e20102e12c44f59943f9",
    "stockQuantity": 68,
    "thumbnail": "https://cdn.dummyjson.com/product-images/35/thumbnail.jpg",
    "images": [
      "https://cdn.dummyjson.com/product-images/35/1.jpg",
      "https://cdn.dummyjson.com/product-images/35/2.jpg",
      "https://cdn.dummyjson.com/product-images/35/3.jpg",
      "https://cdn.dummyjson.com/product-images/35/4.jpg",
      "https://cdn.dummyjson.com/product-images/35/thumbnail.jpg"
    ],
    "isDeleted": false,
    "updatedAt": "2024-05-16T03:37:33.194Z",
    "createdAt": "2024-05-09T06:41:23.591Z"
  },
  {
    "_id": "65a7e45902e12c44f5994471",
    "title": "Sleeve Shirt Womens",
    "description": "Cotton Solid Color Professional Wear Sleeve Shirt Womens Work Blouses Wholesale Clothing Casual Plain Custom Top OEM Customized",
    "price": 7200,
    "discountPercentage": 10.89,
    "category": "664edb3a72080a83b4785e38",
    "brand": "65a7e20102e12c44f59943fa",
    "stockQuantity": 39,
    "thumbnail": "https://cdn.dummyjson.com/product-images/36/thumbnail.jpg",
    "images": [
      "https://cdn.dummyjson.com/product-images/36/1.jpg",
      "https://cdn.dummyjson.com/product-images/36/2.webp",
      "https://cdn.dummyjson.com/product-images/36/3.webp",
      "https://cdn.dummyjson.com/product-images/36/4.jpg",
      "https://cdn.dummyjson.com/product-images/36/thumbnail.jpg"
    ],
    "isDeleted": false,
    "updatedAt": "2024-05-16T03:37:33.194Z",
    "createdAt": "2024-05-09T06:41:23.591Z"
  },
  {
    "_id": "65a7e45902e12c44f5994472",
    "title": "ank Tops for Womens/Girls",
    "description": "PACK OF 3 CAMISOLES ,VERY COMFORTABLE SOFT COTTON STUFF, COMFORTABLE IN ALL FOUR SEASONS",
    "price": 4000,
    "discountPercentage": 12.05,
    "category": "664edb3a72080a83b4785e38",
    "brand": "65a7e20102e12c44f59943fb",
    "stockQuantity": 107,
    "thumbnail": "https://cdn.dummyjson.com/product-images/37/thumbnail.jpg",
    "images": [
      "https://cdn.dummyjson.com/product-images/37/1.jpg",
      "https://cdn.dummyjson.com/product-images/37/2.jpg",
      "https://cdn.dummyjson.com/product-images/37/3.jpg",
      "https://cdn.dummyjson.com/product-images/37/4.jpg",
      "https://cdn.dummyjson.com/product-images/37/thumbnail.jpg"
    ],
    "isDeleted": false,
    "updatedAt": "2024-05-16T03:37:33.194Z",
    "createdAt": "2024-05-09T06:41:23.591Z"
  },
  {
    "_id": "65a7e45902e12c44f5994473",
    "title": "sublimation plain kids tank",
    "description": "sublimation plain kids tank tops wholesale",
    "price": 8000,
    "discountPercentage": 11.12,
    "category": "664edb3a72080a83b4785e38",
    "brand": "65a7e20102e12c44f59943fb",
    "stockQuantity": 20,
    "thumbnail": "https://cdn.dummyjson.com/product-images/38/thumbnail.jpg",
    "images": [
      "https://cdn.dummyjson.com/product-images/38/1.png",
      "https://cdn.dummyjson.com/product-images/38/2.jpg",
      "https://cdn.dummyjson.com/product-images/38/3.jpg",
      "https://cdn.dummyjson.com/product-images/38/4.jpg"
    ],
    "isDeleted": false,
    "updatedAt": "2024-05-16T03:37:33.194Z",
    "createdAt": "2024-05-09T06:41:23.591Z"
  },
  {
    "_id": "65a7e45902e12c44f5994474",
    "title": "Women Sweaters Wool",
    "description": "2021 Custom Winter Fall Zebra Knit Crop Top Women Sweaters Wool Mohair Cos Customize Crew Neck Women' S Crop Top Sweater",
    "price": 48000,
    "discountPercentage": 17.2,
    "category": "664edb3a72080a83b4785e38",
    "brand": "65a7e20102e12c44f59943fc",
    "stockQuantity": 55,
    "thumbnail": "https://cdn.dummyjson.com/product-images/39/thumbnail.jpg",
    "images": [
      "https://cdn.dummyjson.com/product-images/39/1.jpg",
      "https://cdn.dummyjson.com/product-images/39/2.jpg",
      "https://cdn.dummyjson.com/product-images/39/3.jpg",
      "https://cdn.dummyjson.com/product-images/39/4.jpg",
      "https://cdn.dummyjson.com/product-images/39/thumbnail.jpg"
    ],
    "isDeleted": false,
    "updatedAt": "2024-05-16T03:37:33.194Z",
    "createdAt": "2024-05-09T06:41:23.591Z"
  },
  {
    "_id": "65a7e45902e12c44f5994475",
    "title": "women winter clothes",
    "description": "women winter clothes thick fleece hoodie top with sweat pantjogger women sweatsuit set joggers pants two piece pants set",
    "price": 4560,
    "discountPercentage": 13.39,
    "category": "664edb3a72080a83b4785e38",
    "brand": "65a7e20102e12c44f59943fc",
    "stockQuantity": 84,
    "thumbnail": "https://cdn.dummyjson.com/product-images/40/thumbnail.jpg",
    "images": [
      "https://cdn.dummyjson.com/product-images/40/1.jpg",
      "https://cdn.dummyjson.com/product-images/40/2.jpg"
    ],
    "isDeleted": false,
    "updatedAt": "2024-05-16T03:37:33.194Z",
    "createdAt": "2024-05-09T06:41:23.591Z"
  },
  {
    "_id": "65a7e45902e12c44f5994476",
    "title": "NIGHT SUIT",
    "description": "NIGHT SUIT RED MICKY MOUSE..  For Girls. Fantastic Suits.",
    "price": 4400,
    "discountPercentage": 15.05,
    "category": "664edb3a72080a83b4785e38",
    "brand": "65a7e20102e12c44f59943fd",
    "stockQuantity": 21,
    "thumbnail": "https://cdn.dummyjson.com/product-images/41/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/41/1.jpg",
      "https://cdn.dummyjson.com/product-images/41/2.webp",
      "https://cdn.dummyjson.com/product-images/41/3.jpg",
      "https://cdn.dummyjson.com/product-images/41/4.jpg",
      "https://cdn.dummyjson.com/product-images/41/thumbnail.webp"
    ],
    "isDeleted": false,
    "updatedAt": "2024-05-16T03:37:33.194Z",
    "createdAt": "2024-05-09T06:41:23.591Z"
  },
  {
    "_id": "65a7e45902e12c44f5994477",
    "title": "Stiched Kurta plus trouser",
    "description": "FABRIC: LILEIN CHEST: 21 LENGHT: 37 TROUSER: (38) :ARABIC LILEIN",
    "price": 6400,
    "discountPercentage": 15.37,
    "category": "664edb3a72080a83b4785e38",
    "brand": "65a7e20102e12c44f59943fe",
    "stockQuantity": 148,
    "thumbnail": "https://cdn.dummyjson.com/product-images/42/thumbnail.jpg",
    "images": [
      "https://cdn.dummyjson.com/product-images/42/1.png",
      "https://cdn.dummyjson.com/product-images/42/2.png",
      "https://cdn.dummyjson.com/product-images/42/3.png",
      "https://cdn.dummyjson.com/product-images/42/4.jpg",
      "https://cdn.dummyjson.com/product-images/42/thumbnail.jpg"
    ],
    "isDeleted": false,
    "updatedAt": "2024-05-16T03:37:33.194Z",
    "createdAt": "2024-05-09T06:41:23.591Z"
  },
  {
    "_id": "65a7e45902e12c44f5994478",
    "title": "frock gold printed",
    "description": "Ghazi fabric long frock gold printed ready to wear stitched collection (G992)",
    "price": 48000,
    "discountPercentage": 15.55,
    "category": "664edb3a72080a83b4785e38",
    "brand": "65a7e20102e12c44f59943ff",
    "stockQuantity": 150,
    "thumbnail": "https://cdn.dummyjson.com/product-images/43/thumbnail.jpg",
    "images": [
      "https://cdn.dummyjson.com/product-images/43/1.jpg",
      "https://cdn.dummyjson.com/product-images/43/2.jpg",
      "https://cdn.dummyjson.com/product-images/43/3.jpg",
      "https://cdn.dummyjson.com/product-images/43/4.jpg",
      "https://cdn.dummyjson.com/product-images/43/thumbnail.jpg"
    ],
    "isDeleted": false,
    "updatedAt": "2024-05-16T03:37:33.194Z",
    "createdAt": "2024-05-09T06:41:23.591Z"
  },
  {
    "_id": "65a7e45902e12c44f5994479",
    "title": "Ladies Multicolored Dress",
    "description": "This classy shirt for women gives you a gorgeous look on everyday wear and specially for semi-casual wears.",
    "price": 6320,
    "discountPercentage": 16.88,
    "category": "664edb3a72080a83b4785e38",
    "brand": "65a7e20102e12c44f59943ff",
    "stockQuantity": 2,
    "thumbnail": "https://cdn.dummyjson.com/product-images/44/thumbnail.jpg",
    "images": [
      "https://cdn.dummyjson.com/product-images/44/1.jpg",
      "https://cdn.dummyjson.com/product-images/44/2.jpg",
      "https://cdn.dummyjson.com/product-images/44/3.jpg",
      "https://cdn.dummyjson.com/product-images/44/4.jpg",
      "https://cdn.dummyjson.com/product-images/44/thumbnail.jpg"
    ],
    "isDeleted": false,
    "updatedAt": "2024-05-16T03:37:33.194Z",
    "createdAt": "2024-05-09T06:41:23.591Z"
  },
  {
    "_id": "65a7e45902e12c44f599447a",
    "title": "Malai Maxi Dress",
    "description": "Ready to wear, Unique design according to modern standard fashion, Best fitting ,Imported stuff",
    "price": 4000,
    "discountPercentage": 5.07,
    "category": "664edb3a72080a83b4785e38",
    "brand": "65a7e20102e12c44f5994400",
    "stockQuantity": 96,
    "thumbnail": "https://cdn.dummyjson.com/product-images/45/thumbnail.jpg",
    "images": [
      "https://cdn.dummyjson.com/product-images/45/1.jpg",
      "https://cdn.dummyjson.com/product-images/45/2.webp",
      "https://cdn.dummyjson.com/product-images/45/3.jpg",
      "https://cdn.dummyjson.com/product-images/45/4.jpg",
      "https://cdn.dummyjson.com/product-images/45/thumbnail.jpg"
    ],
    "isDeleted": false,
    "updatedAt": "2024-05-16T03:37:33.194Z",
    "createdAt": "2024-05-09T06:41:23.592Z"
  },
  {
    "_id": "65a7e45902e12c44f599447b",
    "title": "women's shoes",
    "description": "Close: Lace, Style with bottom: Increased inside, Sole Material: Rubber",
    "price": 3200,
    "discountPercentage": 16.96,
    "category": "664edb3a72080a83b4785e38",
    "brand": "65a7e20102e12c44f5994401",
    "stockQuantity": 72,
    "thumbnail": "https://cdn.dummyjson.com/product-images/46/thumbnail.jpg",
    "images": [
      "https://cdn.dummyjson.com/product-images/46/1.webp",
      "https://cdn.dummyjson.com/product-images/46/2.jpg",
      "https://cdn.dummyjson.com/product-images/46/3.jpg",
      "https://cdn.dummyjson.com/product-images/46/4.jpg",
      "https://cdn.dummyjson.com/product-images/46/thumbnail.jpg"
    ],
    "isDeleted": false,
    "updatedAt": "2024-05-16T03:37:33.194Z",
    "createdAt": "2024-05-09T06:41:23.592Z"
  },
  {
    "_id": "65a7e45902e12c44f599447c",
    "title": "Sneaker shoes",
    "description": "Synthetic Leather Casual Sneaker shoes for Women/girls Sneakers For Women",
    "price": 9600,
    "discountPercentage": 10.37,
    "category": "664edb3a72080a83b4785e38",
    "brand": "65a7e20102e12c44f5994402",
    "stockQuantity": 50,
    "thumbnail": "https://cdn.dummyjson.com/product-images/47/thumbnail.jpeg",
    "images": [
      "https://cdn.dummyjson.com/product-images/47/1.jpg",
      "https://cdn.dummyjson.com/product-images/47/2.jpg",
      "https://cdn.dummyjson.com/product-images/47/3.jpg",
      "https://cdn.dummyjson.com/product-images/47/thumbnail.jpeg"
    ],
    "isDeleted": false,
    "updatedAt": "2024-05-16T03:37:33.194Z",
    "createdAt": "2024-05-09T06:41:23.592Z"
  },
  {
    "_id": "65a7e45902e12c44f599447d",
    "title": "Women Strip Heel",
    "description": "Features: Flip-flops, Mid Heel, Comfortable, Striped Heel, Antiskid, Striped",
    "price": 3200,
    "discountPercentage": 10.83,
    "category": "664edb3a72080a83b4785e38",
    "brand": "65a7e20102e12c44f5994403",
    "stockQuantity": 25,
    "thumbnail": "https://cdn.dummyjson.com/product-images/48/thumbnail.jpg",
    "images": [
      "https://cdn.dummyjson.com/product-images/48/1.jpg",
      "https://cdn.dummyjson.com/product-images/48/2.jpg",
      "https://cdn.dummyjson.com/product-images/48/3.jpg",
      "https://cdn.dummyjson.com/product-images/48/4.jpg",
      "https://cdn.dummyjson.com/product-images/48/thumbnail.jpg"
    ],
    "isDeleted": false,
    "updatedAt": "2024-05-16T03:37:33.194Z",
    "createdAt": "2024-05-09T06:41:23.592Z"
  },
  {
    "_id": "65a7e45902e12c44f599447e",
    "title": "Chappals & Shoe Ladies Metallic",
    "description": "Womens Chappals & Shoe Ladies Metallic Tong Thong Sandal Flat Summer 2020 Maasai Sandals",
    "price": 1840,
    "discountPercentage": 2.62,
    "category": "664edb3a72080a83b4785e38",
    "brand": "65a7e20102e12c44f5994404",
    "stockQuantity": 107,
    "thumbnail": "https://cdn.dummyjson.com/product-images/49/thumbnail.jpg",
    "images": [
      "https://cdn.dummyjson.com/product-images/49/1.jpg",
      "https://cdn.dummyjson.com/product-images/49/2.jpg",
      "https://cdn.dummyjson.com/product-images/49/3.webp",
      "https://cdn.dummyjson.com/product-images/49/thumbnail.jpg"
    ],
    "isDeleted": false,
    "updatedAt": "2024-05-16T03:37:33.195Z",
    "createdAt": "2024-05-09T06:41:23.592Z"
  },
  {
    "_id": "65a7e45902e12c44f599447f",
    "title": "Women Shoes",
    "description": "2020 New Arrivals Genuine Leather Fashion Trend Platform Summer Women Shoes",
    "price": 2880,
    "discountPercentage": 16.87,
    "category": "664edb3a72080a83b4785e38",
    "brand": "65a7e20102e12c44f5994405",
    "stockQuantity": 46,
    "thumbnail": "https://cdn.dummyjson.com/product-images/50/thumbnail.jpg",
    "images": [
      "https://cdn.dummyjson.com/product-images/50/1.jpeg",
      "https://cdn.dummyjson.com/product-images/50/2.jpg",
      "https://cdn.dummyjson.com/product-images/50/3.jpg"
    ],
    "isDeleted": false,
    "updatedAt": "2024-05-16T03:37:33.195Z",
    "createdAt": "2024-05-09T06:41:23.592Z"
  },
  {
    "_id": "65a7e45902e12c44f5994480",
    "title": "half sleeves T shirts",
    "description": "Many store is creating new designs and trend every month and every year. Daraz.pk have a beautiful range of men fashion brands",
    "price": 1840,
    "discountPercentage": 12.76,
    "category": "664edb3a72080a83b4785e38",
    "brand": "65a7e20102e12c44f5994406",
    "stockQuantity": 132,
    "thumbnail": "https://cdn.dummyjson.com/product-images/51/thumbnail.jpg",
    "images": [
      "https://cdn.dummyjson.com/product-images/51/1.png",
      "https://cdn.dummyjson.com/product-images/51/2.jpg",
      "https://cdn.dummyjson.com/product-images/51/3.jpg",
      "https://cdn.dummyjson.com/product-images/51/thumbnail.jpg"
    ],
    "isDeleted": false,
    "updatedAt": "2024-05-16T03:37:33.195Z",
    "createdAt": "2024-05-09T06:41:23.592Z"
  },
  {
    "_id": "65a7e45902e12c44f5994481",
    "title": "FREE FIRE T Shirt",
    "description": "quality and professional print - It doesn't just look high quality, it is high quality.",
    "price": 800,
    "discountPercentage": 14.72,
    "category": "664edb3a72080a83b4785e38",
    "brand": "65a7e20102e12c44f5994407",
    "stockQuantity": 128,
    "thumbnail": "https://cdn.dummyjson.com/product-images/52/thumbnail.jpg",
    "images": [
      "https://cdn.dummyjson.com/product-images/52/1.png",
      "https://cdn.dummyjson.com/product-images/52/2.png",
      "https://cdn.dummyjson.com/product-images/52/3.jpg",
      "https://cdn.dummyjson.com/product-images/52/4.jpg",
      "https://cdn.dummyjson.com/product-images/52/thumbnail.jpg"
    ],
    "isDeleted": false,
    "updatedAt": "2024-05-16T03:37:33.195Z",
    "createdAt": "2024-05-09T06:41:23.592Z"
  },
  {
    "_id": "65a7e45902e12c44f5994482",
    "title": "printed high quality T shirts",
    "description": "Brand: vintage Apparel ,Export quality",
    "price": 2800,
    "discountPercentage": 7.54,
    "category": "664edb3a72080a83b4785e38",
    "brand": "65a7e20102e12c44f5994406",
    "stockQuantity": 6,
    "thumbnail": "https://cdn.dummyjson.com/product-images/53/thumbnail.jpg",
    "images": [
      "https://cdn.dummyjson.com/product-images/53/1.webp",
      "https://cdn.dummyjson.com/product-images/53/2.jpg",
      "https://cdn.dummyjson.com/product-images/53/3.jpg",
      "https://cdn.dummyjson.com/product-images/53/4.jpg",
      "https://cdn.dummyjson.com/product-images/53/thumbnail.jpg"
    ],
    "isDeleted": false,
    "updatedAt": "2024-05-16T03:37:33.195Z",
    "createdAt": "2024-05-09T06:41:23.592Z"
  },
  {
    "_id": "65a7e45902e12c44f5994483",
    "title": "Pubg Printed Graphic T-Shirt",
    "description": "Product Description Features: 100% Ultra soft Polyester Jersey. Vibrant & colorful printing on front. Feels soft as cotton without ever cracking",
    "price": 3680,
    "discountPercentage": 16.44,
    "category": "664edb3a72080a83b4785e38",
    "brand": "65a7e20102e12c44f5994408",
    "stockQuantity": 136,
    "thumbnail": "https://cdn.dummyjson.com/product-images/54/thumbnail.jpg",
    "images": [
      "https://cdn.dummyjson.com/product-images/54/1.jpg",
      "https://cdn.dummyjson.com/product-images/54/2.jpg",
      "https://cdn.dummyjson.com/product-images/54/3.jpg",
      "https://cdn.dummyjson.com/product-images/54/4.jpg",
      "https://cdn.dummyjson.com/product-images/54/thumbnail.jpg"
    ],
    "isDeleted": false,
    "updatedAt": "2024-05-16T03:37:33.195Z",
    "createdAt": "2024-05-09T06:41:23.592Z"
  },
  {
    "_id": "65a7e45902e12c44f5994484",
    "title": "Money Heist Printed Summer T Shirts",
    "description": "Fabric Jercy, Size: M & L Wear Stylish Dual Stiched",
    "price": 5280,
    "discountPercentage": 15.97,
    "category": "664edb3a72080a83b4785e38",
    "brand": "65a7e20102e12c44f5994408",
    "stockQuantity": 122,
    "thumbnail": "https://cdn.dummyjson.com/product-images/55/thumbnail.jpg",
    "images": [
      "https://cdn.dummyjson.com/product-images/55/1.jpg",
      "https://cdn.dummyjson.com/product-images/55/2.webp",
      "https://cdn.dummyjson.com/product-images/55/3.jpg",
      "https://cdn.dummyjson.com/product-images/55/4.jpg",
      "https://cdn.dummyjson.com/product-images/55/thumbnail.jpg"
    ],
    "isDeleted": false,
    "updatedAt": "2024-05-16T03:37:33.195Z",
    "createdAt": "2024-05-09T06:41:23.592Z"
  },
  {
    "_id": "65a7e45902e12c44f5994485",
    "title": "Sneakers Joggers Shoes",
    "description": "Gender: Men , Colors: Same as DisplayedCondition: 100% Brand New",
    "price": 3200,
    "discountPercentage": 12.57,
    "category": "664edb3a72080a83b4785e38",
    "brand": "65a7e20102e12c44f5994409",
    "stockQuantity": 6,
    "thumbnail": "https://cdn.dummyjson.com/product-images/56/thumbnail.jpg",
    "images": [
      "https://cdn.dummyjson.com/product-images/56/1.jpg",
      "https://cdn.dummyjson.com/product-images/56/2.jpg",
      "https://cdn.dummyjson.com/product-images/56/3.jpg",
      "https://cdn.dummyjson.com/product-images/56/4.jpg",
      "https://cdn.dummyjson.com/product-images/56/5.jpg",
      "https://cdn.dummyjson.com/product-images/56/thumbnail.jpg"
    ],
    "isDeleted": false,
    "updatedAt": "2024-05-16T03:37:33.195Z",
    "createdAt": "2024-05-09T06:41:23.592Z"
  },
  {
    "_id": "65a7e45902e12c44f5994486",
    "title": "Loafers for men",
    "description": "Men Shoes - Loafers for men - Rubber Shoes - Nylon Shoes - Shoes for men - Moccassion - Pure Nylon (Rubber) Expot Quality.",
    "price": 3760,
    "discountPercentage": 10.91,
    "category": "664edb3a72080a83b4785e38",
    "brand": "65a7e20102e12c44f599440a",
    "stockQuantity": 20,
    "thumbnail": "https://cdn.dummyjson.com/product-images/57/thumbnail.jpg",
    "images": [
      "https://cdn.dummyjson.com/product-images/57/1.jpg",
      "https://cdn.dummyjson.com/product-images/57/2.jpg",
      "https://cdn.dummyjson.com/product-images/57/3.jpg",
      "https://cdn.dummyjson.com/product-images/57/4.jpg",
      "https://cdn.dummyjson.com/product-images/57/thumbnail.jpg"
    ],
    "isDeleted": false,
    "updatedAt": "2024-05-16T03:37:33.195Z",
    "createdAt": "2024-05-09T06:41:23.592Z"
  },
  {
    "_id": "65a7e45902e12c44f5994487",
    "title": "formal offices shoes",
    "description": "Pattern Type: Solid, Material: PU, Toe Shape: Pointed Toe ,Outsole Material: Rubber",
    "price": 4560,
    "discountPercentage": 12,
    "category": "664edb3a72080a83b4785e38",
    "brand": "65a7e20102e12c44f5994408",
    "stockQuantity": 68,
    "thumbnail": "https://cdn.dummyjson.com/product-images/58/thumbnail.jpg",
    "images": [
      "https://cdn.dummyjson.com/product-images/58/1.jpg",
      "https://cdn.dummyjson.com/product-images/58/2.jpg",
      "https://cdn.dummyjson.com/product-images/58/3.jpg",
      "https://cdn.dummyjson.com/product-images/58/4.jpg",
      "https://cdn.dummyjson.com/product-images/58/thumbnail.jpg"
    ],
    "isDeleted": false,
    "updatedAt": "2024-05-16T03:37:33.195Z",
    "createdAt": "2024-05-09T06:41:23.592Z"
  },
  {
    "_id": "65a7e45902e12c44f5994488",
    "title": "Spring and summershoes",
    "description": "Comfortable stretch cloth, lightweight body; ,rubber sole, anti-skid wear;",
    "price": 1600,
    "discountPercentage": 8.71,
    "category": "664edb3a72080a83b4785e38",
    "brand": "65a7e20102e12c44f5994409",
    "stockQuantity": 137,
    "thumbnail": "https://cdn.dummyjson.com/product-images/59/thumbnail.jpg",
    "images": [
      "https://cdn.dummyjson.com/product-images/59/1.jpg",
      "https://cdn.dummyjson.com/product-images/59/2.jpg",
      "https://cdn.dummyjson.com/product-images/59/3.jpg",
      "https://cdn.dummyjson.com/product-images/59/4.jpg",
      "https://cdn.dummyjson.com/product-images/59/thumbnail.jpg"
    ],
    "isDeleted": false,
    "updatedAt": "2024-05-16T03:37:33.195Z",
    "createdAt": "2024-05-09T06:41:23.592Z"
  },
  {
    "_id": "65a7e45902e12c44f5994489",
    "title": "Stylish Casual Jeans Shoes",
    "description": "High Quality ,Stylish design ,Comfortable wear ,FAshion ,Durable",
    "price": 4640,
    "discountPercentage": 7.55,
    "category": "664edb3a72080a83b4785e38",
    "brand": "65a7e20102e12c44f5994409",
    "stockQuantity": 129,
    "thumbnail": "https://cdn.dummyjson.com/product-images/60/thumbnail.jpg",
    "images": [
      "https://cdn.dummyjson.com/product-images/60/1.jpg",
      "https://cdn.dummyjson.com/product-images/60/2.jpg",
      "https://cdn.dummyjson.com/product-images/60/3.jpg",
      "https://cdn.dummyjson.com/product-images/60/thumbnail.jpg"
    ],
    "isDeleted": false,
    "updatedAt": "2024-05-16T03:37:33.195Z",
    "createdAt": "2024-05-09T06:41:23.592Z"
  },
  {
    "_id": "65a7e45902e12c44f599448a",
    "title": "Leather Straps Wristwatch",
    "description": "Style:Sport ,Clasp:Buckles ,Water Resistance Depth:3Bar",
    "price": 9600,
    "discountPercentage": 7.14,
    "category": "664ee145378c952f1d59287e",
    "brand": "65a7e20102e12c44f599440b",
    "stockQuantity": 91,
    "thumbnail": "https://cdn.dummyjson.com/product-images/61/thumbnail.jpg",
    "images": [
      "https://cdn.dummyjson.com/product-images/61/1.jpg",
      "https://cdn.dummyjson.com/product-images/61/2.png",
      "https://cdn.dummyjson.com/product-images/61/3.jpg"
    ],
    "isDeleted": false,
    "updatedAt": "2024-05-16T03:37:33.195Z",
    "createdAt": "2024-05-09T06:41:23.592Z"
  },
  {
    "_id": "65a7e45902e12c44f599448b",
    "title": "Waterproof Leather Brand Watch",
    "description": "Watch Crown With Environmental IPS Bronze Electroplating; Display system of 12 hours",
    "price": 3680,
    "discountPercentage": 3.15,
    "category": "664ee145378c952f1d59287e",
    "brand": "65a7e20102e12c44f599440c",
    "stockQuantity": 95,
    "thumbnail": "https://cdn.dummyjson.com/product-images/62/thumbnail.jpg",
    "images": [
      "https://cdn.dummyjson.com/product-images/62/1.jpg",
      "https://cdn.dummyjson.com/product-images/62/2.jpg"
    ],
    "isDeleted": false,
    "updatedAt": "2024-05-16T03:37:33.195Z",
    "createdAt": "2024-05-09T06:41:23.592Z"
  },
  {
    "_id": "65a7e45902e12c44f599448c",
    "title": "Royal Blue Premium Watch",
    "description": "Men Silver Chain Royal Blue Premium Watch Latest Analog Watch",
    "price": 4000,
    "discountPercentage": 2.56,
    "category": "664ee145378c952f1d59287e",
    "brand": "65a7e20102e12c44f599440c",
    "stockQuantity": 142,
    "thumbnail": "https://cdn.dummyjson.com/product-images/63/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/63/1.jpg",
      "https://cdn.dummyjson.com/product-images/63/2.jpg",
      "https://cdn.dummyjson.com/product-images/63/3.png",
      "https://cdn.dummyjson.com/product-images/63/4.jpeg"
    ],
    "isDeleted": false,
    "updatedAt": "2024-05-16T03:37:33.195Z",
    "createdAt": "2024-05-09T06:41:23.592Z"
  },
  {
    "_id": "65a7e45902e12c44f599448d",
    "title": "Leather Strap Skeleton Watch",
    "description": "Leather Strap Skeleton Watch for Men - Stylish and Latest Design",
    "price": 3680,
    "discountPercentage": 10.2,
    "category": "664ee145378c952f1d59287e",
    "brand": "65a7e20102e12c44f599440d",
    "stockQuantity": 61,
    "thumbnail": "https://cdn.dummyjson.com/product-images/64/thumbnail.jpg",
    "images": [
      "https://cdn.dummyjson.com/product-images/64/1.jpg",
      "https://cdn.dummyjson.com/product-images/64/2.webp",
      "https://cdn.dummyjson.com/product-images/64/3.jpg",
      "https://cdn.dummyjson.com/product-images/64/thumbnail.jpg"
    ],
    "isDeleted": false,
    "updatedAt": "2024-05-16T03:37:33.195Z",
    "createdAt": "2024-05-09T06:41:23.592Z"
  },
  {
    "_id": "65a7e45902e12c44f599448e",
    "title": "Stainless Steel Wrist Watch",
    "description": "Stylish Watch For Man (Luxury) Classy Men's Stainless Steel Wrist Watch - Box Packed",
    "price": 3760,
    "discountPercentage": 17.79,
    "category": "664ee145378c952f1d59287e",
    "brand": "65a7e20102e12c44f599440e",
    "stockQuantity": 94,
    "thumbnail": "https://cdn.dummyjson.com/product-images/65/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/65/1.jpg",
      "https://cdn.dummyjson.com/product-images/65/2.webp",
      "https://cdn.dummyjson.com/product-images/65/3.jpg",
      "https://cdn.dummyjson.com/product-images/65/4.webp",
      "https://cdn.dummyjson.com/product-images/65/thumbnail.webp"
    ],
    "isDeleted": false,
    "updatedAt": "2024-05-16T03:37:33.195Z",
    "createdAt": "2024-05-09T06:41:23.592Z"
  },
  {
    "_id": "65a7e45902e12c44f599448f",
    "title": "Steel Analog Couple Watches",
    "description": "Elegant design, Stylish ,Unique & Trendy,Comfortable wear",
    "price": 2800,
    "discountPercentage": 3.23,
    "category": "664ee145378c952f1d59287e",
    "brand": "65a7e20102e12c44f599440f",
    "stockQuantity": 24,
    "thumbnail": "https://cdn.dummyjson.com/product-images/66/thumbnail.jpg",
    "images": [
      "https://cdn.dummyjson.com/product-images/66/1.jpg",
      "https://cdn.dummyjson.com/product-images/66/2.jpg",
      "https://cdn.dummyjson.com/product-images/66/3.jpg",
      "https://cdn.dummyjson.com/product-images/66/4.JPG",
      "https://cdn.dummyjson.com/product-images/66/thumbnail.jpg"
    ],
    "isDeleted": false,
    "updatedAt": "2024-05-16T03:37:33.195Z",
    "createdAt": "2024-05-09T06:41:23.592Z"
  },
  {
    "_id": "65a7e45902e12c44f5994490",
    "title": "Fashion Magnetic Wrist Watch",
    "description": "Buy this awesome  The product is originally manufactured by the company and it's a top selling product with a very reasonable",
    "price": 4800,
    "discountPercentage": 16.69,
    "category": "664ee145378c952f1d59287e",
    "brand": "65a7e20102e12c44f599440f",
    "stockQuantity": 46,
    "thumbnail": "https://cdn.dummyjson.com/product-images/67/thumbnail.jpg",
    "images": [
      "https://cdn.dummyjson.com/product-images/67/1.jpg",
      "https://cdn.dummyjson.com/product-images/67/2.jpg",
      "https://cdn.dummyjson.com/product-images/67/3.jpg",
      "https://cdn.dummyjson.com/product-images/67/4.jpg",
      "https://cdn.dummyjson.com/product-images/67/thumbnail.jpg"
    ],
    "isDeleted": false,
    "updatedAt": "2024-05-16T03:37:33.195Z",
    "createdAt": "2024-05-09T06:41:23.592Z"
  },
  {
    "_id": "65a7e45902e12c44f5994491",
    "title": "Stylish Luxury Digital Watch",
    "description": "Stylish Luxury Digital Watch For Girls / Women - Led Smart Ladies Watches For Girls",
    "price": 4560,
    "discountPercentage": 9.03,
    "category": "664ee145378c952f1d59287e",
    "brand": "65a7e20102e12c44f5994410",
    "stockQuantity": 77,
    "thumbnail": "https://cdn.dummyjson.com/product-images/68/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/68/1.jpg",
      "https://cdn.dummyjson.com/product-images/68/2.jpg"
    ],
    "isDeleted": false,
    "updatedAt": "2024-05-16T03:37:33.195Z",
    "createdAt": "2024-05-09T06:41:23.593Z"
  },
  {
    "_id": "65a7e45902e12c44f5994492",
    "title": "Golden Watch Pearls Bracelet Watch",
    "description": "Product details of Golden Watch Pearls Bracelet Watch For Girls - Golden Chain Ladies Bracelate Watch for Women",
    "price": 3760,
    "discountPercentage": 17.55,
    "category": "664ee145378c952f1d59287e",
    "brand": "65a7e20102e12c44f5994411",
    "stockQuantity": 89,
    "thumbnail": "https://cdn.dummyjson.com/product-images/69/thumbnail.jpg",
    "images": [
      "https://cdn.dummyjson.com/product-images/69/1.jpg",
      "https://cdn.dummyjson.com/product-images/69/2.jpg",
      "https://cdn.dummyjson.com/product-images/69/3.webp",
      "https://cdn.dummyjson.com/product-images/69/4.jpg",
      "https://cdn.dummyjson.com/product-images/69/thumbnail.jpg"
    ],
    "isDeleted": false,
    "updatedAt": "2024-05-16T03:37:33.195Z",
    "createdAt": "2024-05-09T06:41:23.593Z"
  },
  {
    "_id": "65a7e45902e12c44f5994493",
    "title": "Stainless Steel Women",
    "description": "Fashion Skmei 1830 Shell Dial Stainless Steel Women Wrist Watch Lady Bracelet Watch Quartz Watches Ladies",
    "price": 2800,
    "discountPercentage": 8.98,
    "category": "664ee145378c952f1d59287e",
    "brand": "65a7e20102e12c44f5994412",
    "stockQuantity": 111,
    "thumbnail": "https://cdn.dummyjson.com/product-images/70/thumbnail.jpg",
    "images": [
      "https://cdn.dummyjson.com/product-images/70/1.jpg",
      "https://cdn.dummyjson.com/product-images/70/2.jpg",
      "https://cdn.dummyjson.com/product-images/70/thumbnail.jpg"
    ],
    "isDeleted": false,
    "updatedAt": "2024-05-16T03:37:33.195Z",
    "createdAt": "2024-05-09T06:41:23.593Z"
  },
  {
    "_id": "65a7e45902e12c44f5994494",
    "title": "Women Shoulder Bags",
    "description": "LouisWill Women Shoulder Bags Long Clutches Cross Body Bags Phone Bags PU Leather Hand Bags Large Capacity Card Holders Zipper Coin Purses Fashion Crossbody Bags for Girls Ladies",
    "price": 3680,
    "discountPercentage": 14.65,
    "category": "65a7e24602e12c44f599443a",
    "brand": "65a7e20102e12c44f5994413",
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
  {
    "_id": "65a7e45902e12c44f5994495",
    "title": "Handbag For Girls",
    "description": "This fashion is designed to add a charming effect to your casual outfit. This Bag is made of synthetic leather.",
    "price": 1840,
    "discountPercentage": 17.5,
    "category": "65a7e24602e12c44f599443a",
    "brand": "65a7e20102e12c44f5994413",
    "stockQuantity": 27,
    "thumbnail": "https://cdn.dummyjson.com/product-images/72/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/72/1.jpg",
      "https://cdn.dummyjson.com/product-images/72/2.png",
      "https://cdn.dummyjson.com/product-images/72/3.webp",
      "https://cdn.dummyjson.com/product-images/72/4.jpg",
      "https://cdn.dummyjson.com/product-images/72/thumbnail.webp"
    ],
    "isDeleted": false,
    "updatedAt": "2024-05-16T03:37:33.195Z",
    "createdAt": "2024-05-09T06:41:23.593Z"
  },
  {
    "_id": "65a7e45902e12c44f5994496",
    "title": "Fancy hand clutch",
    "description": "This fashion is designed to add a charming effect to your casual outfit. This Bag is made of synthetic leather.",
    "price": 3520,
    "discountPercentage": 10.39,
    "category": "65a7e24602e12c44f599443a",
    "brand": "65a7e20102e12c44f5994412",
    "stockQuantity": 101,
    "thumbnail": "https://cdn.dummyjson.com/product-images/73/thumbnail.jpg",
    "images": [
      "https://cdn.dummyjson.com/product-images/73/1.jpg",
      "https://cdn.dummyjson.com/product-images/73/2.webp",
      "https://cdn.dummyjson.com/product-images/73/3.jpg",
      "https://cdn.dummyjson.com/product-images/73/thumbnail.jpg"
    ],
    "isDeleted": false,
    "updatedAt": "2024-05-16T03:37:33.195Z",
    "createdAt": "2024-05-09T06:41:23.593Z"
  },
  {
    "_id": "65a7e45902e12c44f5994497",
    "title": "Leather Hand Bag",
    "description": "It features an attractive design that makes it a must have accessory in your collection. We sell different kind of bags for boys, kids, women, girls and also for unisex.",
    "price": 4560,
    "discountPercentage": 11.19,
    "category": "65a7e24602e12c44f599443a",
    "brand": "65a7e20102e12c44f5994414",
    "stockQuantity": 43,
    "thumbnail": "https://cdn.dummyjson.com/product-images/74/thumbnail.jpg",
    "images": [
      "https://cdn.dummyjson.com/product-images/74/1.jpg",
      "https://cdn.dummyjson.com/product-images/74/2.jpg",
      "https://cdn.dummyjson.com/product-images/74/3.jpg",
      "https://cdn.dummyjson.com/product-images/74/4.jpg",
      "https://cdn.dummyjson.com/product-images/74/thumbnail.jpg"
    ],
    "isDeleted": false,
    "updatedAt": "2024-05-16T03:37:33.195Z",
    "createdAt": "2024-05-09T06:41:23.593Z"
  },
  {
    "_id": "65a7e45902e12c44f5994498",
    "title": "Seven Pocket Women Bag",
    "description": "Seven Pocket Women Bag Handbags Lady Shoulder Crossbody Bag Female Purse Seven Pocket Bag",
    "price": 5440,
    "discountPercentage": 14.87,
    "category": "65a7e24602e12c44f599443a",
    "brand": "65a7e20102e12c44f5994415",
    "stockQuantity": 13,
    "thumbnail": "https://cdn.dummyjson.com/product-images/75/thumbnail.jpg",
    "images": [
      "https://cdn.dummyjson.com/product-images/75/1.jpg",
      "https://cdn.dummyjson.com/product-images/75/2.jpg",
      "https://cdn.dummyjson.com/product-images/75/3.jpg",
      "https://cdn.dummyjson.com/product-images/75/thumbnail.jpg"
    ],
    "isDeleted": false,
    "updatedAt": "2024-05-16T03:37:33.195Z",
    "createdAt": "2024-05-09T06:41:23.593Z"
  },
  {
    "_id": "65a7e45902e12c44f5994499",
    "title": "Silver Ring Set Women",
    "description": "Jewelry Type:RingsCertificate Type:NonePlating:Silver PlatedShapeattern:noneStyle:CLASSICReligious",
    "price": 5600,
    "discountPercentage": 13.57,
    "category": "65a7e24602e12c44f599443b",
    "brand": "65a7e20102e12c44f5994416",
    "stockQuantity": 51,
    "thumbnail": "https://cdn.dummyjson.com/product-images/76/thumbnail.jpg",
    "images": [
      "https://cdn.dummyjson.com/product-images/76/1.jpg",
      "https://cdn.dummyjson.com/product-images/76/2.jpg",
      "https://cdn.dummyjson.com/product-images/76/thumbnail.jpg"
    ],
    "isDeleted": false,
    "updatedAt": "2024-05-16T03:37:33.195Z",
    "createdAt": "2024-05-09T06:41:23.593Z"
  },
  {
    "_id": "65a7e45902e12c44f599449a",
    "title": "Rose Ring",
    "description": "Brand: The Greetings Flower Colour: RedRing Colour: GoldenSize: Adjustable",
    "price": 8000,
    "discountPercentage": 3.22,
    "category": "65a7e24602e12c44f599443b",
    "brand": "65a7e20102e12c44f5994414",
    "stockQuantity": 149,
    "thumbnail": "https://cdn.dummyjson.com/product-images/77/thumbnail.jpg",
    "images": [
      "https://cdn.dummyjson.com/product-images/77/1.jpg",
      "https://cdn.dummyjson.com/product-images/77/2.jpg",
      "https://cdn.dummyjson.com/product-images/77/3.jpg",
      "https://cdn.dummyjson.com/product-images/77/thumbnail.jpg"
    ],
    "isDeleted": false,
    "updatedAt": "2024-05-16T03:37:33.195Z",
    "createdAt": "2024-05-09T06:41:23.593Z"
  },
  {
    "_id": "65a7e45902e12c44f599449b",
    "title": "Rhinestone Korean Style Open Rings",
    "description": "Fashion Jewellery 3Pcs Adjustable Pearl Rhinestone Korean Style Open Rings For Women",
    "price": 2400,
    "discountPercentage": 8.02,
    "category": "65a7e24602e12c44f599443b",
    "brand": "65a7e20102e12c44f5994417",
    "stockQuantity": 9,
    "thumbnail": "https://cdn.dummyjson.com/product-images/78/thumbnail.jpg",
    "images": [
      "https://cdn.dummyjson.com/product-images/78/thumbnail.jpg"
    ],
    "isDeleted": false,
    "updatedAt": "2024-05-16T03:37:33.196Z",
    "createdAt": "2024-05-09T06:41:23.593Z"
  },
  {
    "_id": "65a7e45902e12c44f599449c",
    "title": "Elegant Female Pearl Earrings",
    "description": "Elegant Female Pearl Earrings Set Zircon Pearl Earings Women Party Accessories 9 Pairs/Set",
    "price": 2400,
    "discountPercentage": 12.8,
    "category": "65a7e24602e12c44f599443b",
    "brand": "65a7e20102e12c44f5994417",
    "stockQuantity": 16,
    "thumbnail": "https://cdn.dummyjson.com/product-images/79/thumbnail.jpg",
    "images": [
      "https://cdn.dummyjson.com/product-images/79/1.jpg"
    ],
    "isDeleted": false,
    "updatedAt": "2024-05-16T03:37:33.196Z",
    "createdAt": "2024-05-09T06:41:23.593Z"
  },
  {
    "_id": "65a7e45902e12c44f599449d",
    "title": "Chain Pin Tassel Earrings",
    "description": "Pair Of Ear Cuff Butterfly Long Chain Pin Tassel Earrings - Silver ( Long Life Quality Product)",
    "price": 3600,
    "discountPercentage": 17.75,
    "category": "65a7e24602e12c44f599443b",
    "brand": "65a7e20102e12c44f5994418",
    "stockQuantity": 9,
    "thumbnail": "https://cdn.dummyjson.com/product-images/80/thumbnail.jpg",
    "images": [
      "https://cdn.dummyjson.com/product-images/80/1.jpg",
      "https://cdn.dummyjson.com/product-images/80/2.jpg",
      "https://cdn.dummyjson.com/product-images/80/3.png",
      "https://cdn.dummyjson.com/product-images/80/4.jpg",
      "https://cdn.dummyjson.com/product-images/80/thumbnail.jpg"
    ],
    "isDeleted": false,
    "updatedAt": "2024-05-16T03:37:33.196Z",
    "createdAt": "2024-05-09T06:41:23.593Z"
  },
  {
    "_id": "65a7e45902e12c44f599449e",
    "title": "Round Silver Frame Sun Glasses",
    "description": "A pair of sunglasses can protect your eyes from being hurt. For car driving, vacation travel, outdoor activities, social gatherings,",
    "price": 1520,
    "discountPercentage": 10.1,
    "category": "65a7e24602e12c44f599443c",
    "brand": "65a7e20102e12c44f5994419",
    "stockQuantity": 78,
    "thumbnail": "https://cdn.dummyjson.com/product-images/81/thumbnail.jpg",
    "images": [
      "https://cdn.dummyjson.com/product-images/81/1.jpg",
      "https://cdn.dummyjson.com/product-images/81/2.jpg",
      "https://cdn.dummyjson.com/product-images/81/3.jpg",
      "https://cdn.dummyjson.com/product-images/81/4.webp",
      "https://cdn.dummyjson.com/product-images/81/thumbnail.jpg"
    ],
    "isDeleted": false,
    "updatedAt": "2024-05-16T03:37:33.196Z",
    "createdAt": "2024-05-09T06:41:23.593Z"
  },
  {
    "_id": "65a7e45902e12c44f599449f",
    "title": "Kabir Singh Square Sunglass",
    "description": "Orignal Metal Kabir Singh design 2020 Sunglasses Men Brand Designer Sun Glasses Kabir Singh Square Sunglass",
    "price": 4000,
    "discountPercentage": 15.6,
    "category": "65a7e24602e12c44f599443c",
    "brand": "65a7e20102e12c44f5994419",
    "stockQuantity": 78,
    "thumbnail": "https://cdn.dummyjson.com/product-images/82/thumbnail.jpg",
    "images": [
      "https://cdn.dummyjson.com/product-images/82/1.jpg",
      "https://cdn.dummyjson.com/product-images/82/2.webp",
      "https://cdn.dummyjson.com/product-images/82/3.jpg",
      "https://cdn.dummyjson.com/product-images/82/4.jpg",
      "https://cdn.dummyjson.com/product-images/82/thumbnail.jpg"
    ],
    "isDeleted": false,
    "updatedAt": "2024-05-16T03:37:33.196Z",
    "createdAt": "2024-05-09T06:41:23.593Z"
  },
  {
    "_id": "65a7e45902e12c44f59944a0",
    "title": "Wiley X Night Vision Yellow Glasses",
    "description": "Wiley X Night Vision Yellow Glasses for Riders - Night Vision Anti Fog Driving Glasses - Free Night Glass Cover - Shield Eyes From Dust and Virus- For Night Sport Matches",
    "price": 2400,
    "discountPercentage": 6.33,
    "category": "65a7e24602e12c44f599443c",
    "brand": "65a7e20102e12c44f599441a",
    "stockQuantity": 115,
    "thumbnail": "https://cdn.dummyjson.com/product-images/83/thumbnail.jpg",
    "images": [
      "https://cdn.dummyjson.com/product-images/83/1.jpg",
      "https://cdn.dummyjson.com/product-images/83/2.jpg",
      "https://cdn.dummyjson.com/product-images/83/3.jpg",
      "https://cdn.dummyjson.com/product-images/83/4.jpg",
      "https://cdn.dummyjson.com/product-images/83/thumbnail.jpg"
    ],
    "isDeleted": false,
    "updatedAt": "2024-05-16T03:37:33.196Z",
    "createdAt": "2024-05-09T06:41:23.593Z"
  },
  {
    "_id": "65a7e45902e12c44f59944a1",
    "title": "Square Sunglasses",
    "description": "Fashion Oversized Square Sunglasses Retro Gradient Big Frame Sunglasses For Women One Piece Gafas Shade Mirror Clear Lens 17059",
    "price": 2240,
    "discountPercentage": 13.89,
    "category": "65a7e24602e12c44f599443c",
    "brand": "65a7e20102e12c44f599441a",
    "stockQuantity": 64,
    "thumbnail": "https://cdn.dummyjson.com/product-images/84/thumbnail.jpg",
    "images": [
      "https://cdn.dummyjson.com/product-images/84/1.jpg",
      "https://cdn.dummyjson.com/product-images/84/2.jpg",
      "https://cdn.dummyjson.com/product-images/84/thumbnail.jpg"
    ],
    "isDeleted": false,
    "updatedAt": "2024-05-16T03:37:33.196Z",
    "createdAt": "2024-05-09T06:41:23.593Z"
  },
  {
    "_id": "65a7e45902e12c44f59944a2",
    "title": "LouisWill Men Sunglasses",
    "description": "LouisWill Men Sunglasses Polarized Sunglasses UV400 Sunglasses Day Night Dual Use Safety Driving Night Vision Eyewear AL-MG Frame Sun Glasses with Free Box for Drivers",
    "price": 4000,
    "discountPercentage": 11.27,
    "category": "65a7e24602e12c44f599443c",
    "brand": "65a7e20102e12c44f5994413",
    "stockQuantity": 92,
    "thumbnail": "https://cdn.dummyjson.com/product-images/85/thumbnail.jpg",
    "images": [
      "https://cdn.dummyjson.com/product-images/85/1.jpg",
      "https://cdn.dummyjson.com/product-images/85/2.jpg",
      "https://cdn.dummyjson.com/product-images/85/thumbnail.jpg"
    ],
    "isDeleted": false,
    "updatedAt": "2024-05-16T03:37:33.196Z",
    "createdAt": "2024-05-09T06:41:23.593Z"
  },
  {
    "_id": "65a7e45902e12c44f59944a3",
    "title": "Bluetooth Aux",
    "description": "Bluetooth Aux Bluetooth Car Aux Car Bluetooth Transmitter Aux Audio Receiver Handfree Car Bluetooth Music Receiver Universal 3.5mm Streaming A2DP Wireless Auto AUX Audio Adapter With Mic For Phone MP3",
    "price": 2000,
    "discountPercentage": 10.56,
    "category": "65a7e24602e12c44f599443d",
    "brand": "65a7e20102e12c44f599441b",
    "stockQuantity": 22,
    "thumbnail": "https://cdn.dummyjson.com/product-images/86/thumbnail.jpg",
    "images": [
      "https://cdn.dummyjson.com/product-images/86/1.jpg",
      "https://cdn.dummyjson.com/product-images/86/2.webp",
      "https://cdn.dummyjson.com/product-images/86/3.jpg",
      "https://cdn.dummyjson.com/product-images/86/4.jpg",
      "https://cdn.dummyjson.com/product-images/86/thumbnail.jpg"
    ],
    "isDeleted": false,
    "updatedAt": "2024-05-16T03:37:33.196Z",
    "createdAt": "2024-05-09T06:41:23.593Z"
  },
  {
    "_id": "65a7e45902e12c44f59944a4",
    "title": "t Temperature Controller Incubator Controller",
    "description": "Both Heat and Cool Purpose, Temperature control range; -50 to +110, Temperature measurement accuracy; 0.1, Control accuracy; 0.1",
    "price": 3200,
    "discountPercentage": 11.3,
    "category": "65a7e24602e12c44f599443d",
    "brand": "65a7e20102e12c44f599441c",
    "stockQuantity": 37,
    "thumbnail": "https://cdn.dummyjson.com/product-images/87/thumbnail.jpg",
    "images": [
      "https://cdn.dummyjson.com/product-images/87/1.jpg",
      "https://cdn.dummyjson.com/product-images/87/2.jpg",
      "https://cdn.dummyjson.com/product-images/87/3.jpg",
      "https://cdn.dummyjson.com/product-images/87/4.jpg",
      "https://cdn.dummyjson.com/product-images/87/thumbnail.jpg"
    ],
    "isDeleted": false,
    "updatedAt": "2024-05-16T03:37:33.196Z",
    "createdAt": "2024-05-09T06:41:23.593Z"
  },
  {
    "_id": "65a7e45902e12c44f59944a5",
    "title": "TC Reusable Silicone Magic Washing Gloves",
    "description": "TC Reusable Silicone Magic Washing Gloves with Scrubber, Cleaning Brush Scrubber Gloves Heat Resistant Pair for Cleaning of Kitchen, Dishes, Vegetables and Fruits, Bathroom, Car Wash, Pet Care and Multipurpose",
    "price": 2320,
    "discountPercentage": 3.19,
    "category": "65a7e24602e12c44f599443d",
    "brand": "65a7e20102e12c44f599441d",
    "stockQuantity": 42,
    "thumbnail": "https://cdn.dummyjson.com/product-images/88/thumbnail.jpg",
    "images": [
      "https://cdn.dummyjson.com/product-images/88/1.jpg",
      "https://cdn.dummyjson.com/product-images/88/2.jpg",
      "https://cdn.dummyjson.com/product-images/88/3.jpg",
      "https://cdn.dummyjson.com/product-images/88/4.webp",
      "https://cdn.dummyjson.com/product-images/88/thumbnail.jpg"
    ],
    "isDeleted": false,
    "updatedAt": "2024-05-16T03:37:33.196Z",
    "createdAt": "2024-05-09T06:41:23.593Z"
  },
  {
    "_id": "65a7e45902e12c44f59944a6",
    "title": "Qualcomm original Car Charger",
    "description": "best Quality CHarger , Highly Recommended to all best Quality CHarger , Highly Recommended to all",
    "price": 3200,
    "discountPercentage": 17.53,
    "category": "65a7e24602e12c44f599443d",
    "brand": "65a7e20102e12c44f599441d",
    "stockQuantity": 79,
    "thumbnail": "https://cdn.dummyjson.com/product-images/89/thumbnail.jpg",
    "images": [
      "https://cdn.dummyjson.com/product-images/89/1.jpg",
      "https://cdn.dummyjson.com/product-images/89/2.jpg",
      "https://cdn.dummyjson.com/product-images/89/3.jpg",
      "https://cdn.dummyjson.com/product-images/89/4.jpg",
      "https://cdn.dummyjson.com/product-images/89/thumbnail.jpg"
    ],
    "isDeleted": false,
    "updatedAt": "2024-05-16T03:37:33.196Z",
    "createdAt": "2024-05-09T06:41:23.594Z"
  },
  {
    "_id": "65a7e45902e12c44f59944a7",
    "title": "Cycle Bike Glow",
    "description": "Universal fitment and easy to install no special wires, can be easily installed and removed. Fits most standard tyre air stem valves of road, mountain bicycles, motocycles and cars.Bright led will turn on w",
    "price": 2800,
    "discountPercentage": 11.08,
    "category": "65a7e24602e12c44f599443d",
    "brand": "65a7e20102e12c44f599441e",
    "stockQuantity": 63,
    "thumbnail": "https://cdn.dummyjson.com/product-images/90/thumbnail.jpg",
    "images": [
      "https://cdn.dummyjson.com/product-images/90/1.jpg",
      "https://cdn.dummyjson.com/product-images/90/2.jpg",
      "https://cdn.dummyjson.com/product-images/90/3.jpg",
      "https://cdn.dummyjson.com/product-images/90/4.jpg",
      "https://cdn.dummyjson.com/product-images/90/thumbnail.jpg"
    ],
    "isDeleted": false,
    "updatedAt": "2024-05-16T03:37:33.196Z",
    "createdAt": "2024-05-09T06:41:23.594Z"
  },
  {
    "_id": "65a7e45902e12c44f59944a8",
    "title": "Black Motorbike",
    "description": "Engine Type:Wet sump, Single Cylinder, Four Stroke, Two Valves, Air Cooled with SOHC (Single Over Head Cam) Chain Drive Bore & Stroke:47.0 x 49.5 MM",
    "price": 45520,
    "discountPercentage": 13.63,
    "category": "65a7e24602e12c44f599443e",
    "brand": "65a7e20102e12c44f599441f",
    "stockQuantity": 115,
    "thumbnail": "https://cdn.dummyjson.com/product-images/91/thumbnail.jpg",
    "images": [
      "https://cdn.dummyjson.com/product-images/91/1.jpg",
      "https://cdn.dummyjson.com/product-images/91/2.jpg",
      "https://cdn.dummyjson.com/product-images/91/3.jpg",
      "https://cdn.dummyjson.com/product-images/91/4.jpg",
      "https://cdn.dummyjson.com/product-images/91/thumbnail.jpg"
    ],
    "isDeleted": false,
    "updatedAt": "2024-05-16T03:37:33.196Z",
    "createdAt": "2024-05-09T06:41:23.594Z"
  },
  {
    "_id": "65a7e45902e12c44f59944a9",
    "title": "HOT SALE IN EUROPE electric racing motorcycle",
    "description": "HOT SALE IN EUROPE electric racing motorcycle electric motorcycle for sale adult electric motorcycles",
    "price": 73600,
    "discountPercentage": 14.4,
    "category": "65a7e24602e12c44f599443e",
    "brand": "65a7e20102e12c44f5994420",
    "stockQuantity": 22,
    "thumbnail": "https://cdn.dummyjson.com/product-images/92/thumbnail.jpg",
    "images": [
      "https://cdn.dummyjson.com/product-images/92/1.jpg",
      "https://cdn.dummyjson.com/product-images/92/2.jpg",
      "https://cdn.dummyjson.com/product-images/92/3.jpg",
      "https://cdn.dummyjson.com/product-images/92/4.jpg"
    ],
    "isDeleted": false,
    "updatedAt": "2024-05-16T03:37:33.196Z",
    "createdAt": "2024-05-09T06:41:23.594Z"
  },
  {
    "_id": "65a7e45902e12c44f59944aa",
    "title": "Automatic Motor Gas Motorcycles",
    "description": "150cc 4-Stroke Motorcycle Automatic Motor Gas Motorcycles Scooter motorcycles 150cc scooter",
    "price": 84000,
    "discountPercentage": 3.34,
    "category": "65a7e24602e12c44f599443e",
    "brand": "65a7e20102e12c44f5994421",
    "stockQuantity": 127,
    "thumbnail": "https://cdn.dummyjson.com/product-images/93/thumbnail.jpg",
    "images": [
      "https://cdn.dummyjson.com/product-images/93/1.jpg",
      "https://cdn.dummyjson.com/product-images/93/2.jpg",
      "https://cdn.dummyjson.com/product-images/93/3.jpg",
      "https://cdn.dummyjson.com/product-images/93/4.jpg",
      "https://cdn.dummyjson.com/product-images/93/thumbnail.jpg"
    ],
    "isDeleted": false,
    "updatedAt": "2024-05-16T03:37:33.196Z",
    "createdAt": "2024-05-09T06:41:23.594Z"
  },
  {
    "_id": "65a7e45902e12c44f59944ab",
    "title": "new arrivals Fashion motocross goggles",
    "description": "new arrivals Fashion motocross goggles motorcycle motocross racing motorcycle",
    "price": 72000,
    "discountPercentage": 3.85,
    "category": "65a7e24602e12c44f599443e",
    "brand": "65a7e20102e12c44f5994422",
    "stockQuantity": 109,
    "thumbnail": "https://cdn.dummyjson.com/product-images/94/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/94/1.webp",
      "https://cdn.dummyjson.com/product-images/94/2.jpg",
      "https://cdn.dummyjson.com/product-images/94/3.jpg",
      "https://cdn.dummyjson.com/product-images/94/thumbnail.webp"
    ],
    "isDeleted": false,
    "updatedAt": "2024-05-16T03:37:33.196Z",
    "createdAt": "2024-05-09T06:41:23.594Z"
  },
  {
    "_id": "65a7e45902e12c44f59944ac",
    "title": "Wholesale cargo lashing Belt",
    "description": "Wholesale cargo lashing Belt Tie Down end Ratchet strap customized strap 25mm motorcycle 1500kgs with rubber handle",
    "price": 74400,
    "discountPercentage": 17.67,
    "category": "65a7e24602e12c44f599443e",
    "brand": "65a7e20102e12c44f5994423",
    "stockQuantity": 144,
    "thumbnail": "https://cdn.dummyjson.com/product-images/95/thumbnail.jpg",
    "images": [
      "https://cdn.dummyjson.com/product-images/95/1.jpg",
      "https://cdn.dummyjson.com/product-images/95/2.jpg",
      "https://cdn.dummyjson.com/product-images/95/3.jpg",
      "https://cdn.dummyjson.com/product-images/95/4.jpg",
      "https://cdn.dummyjson.com/product-images/95/thumbnail.jpg"
    ],
    "isDeleted": false,
    "updatedAt": "2024-05-16T03:37:33.196Z",
    "createdAt": "2024-05-09T06:41:23.594Z"
  },
  {
    "_id": "65a7e45902e12c44f59944ad",
    "title": "lighting ceiling kitchen",
    "description": "Wholesale slim hanging decorative kid room lighting ceiling kitchen chandeliers pendant light modern",
    "price": 2400,
    "discountPercentage": 14.89,
    "category": "65a7e24602e12c44f599443f",
    "brand": "65a7e20102e12c44f5994424",
    "stockQuantity": 96,
    "thumbnail": "https://cdn.dummyjson.com/product-images/96/thumbnail.jpg",
    "images": [
      "https://cdn.dummyjson.com/product-images/96/1.jpg",
      "https://cdn.dummyjson.com/product-images/96/2.jpg",
      "https://cdn.dummyjson.com/product-images/96/3.jpg",
      "https://cdn.dummyjson.com/product-images/96/4.jpg",
      "https://cdn.dummyjson.com/product-images/96/thumbnail.jpg"
    ],
    "isDeleted": false,
    "updatedAt": "2024-05-16T03:37:33.196Z",
    "createdAt": "2024-05-09T06:41:23.594Z"
  },
  {
    "_id": "65a7e45902e12c44f59944ae",
    "title": "Metal Ceramic Flower",
    "description": "Metal Ceramic Flower Chandelier Home Lighting American Vintage Hanging Lighting Pendant Lamp",
    "price": 2800,
    "discountPercentage": 10.94,
    "category": "65a7e24602e12c44f599443f",
    "brand": "65a7e20102e12c44f5994425",
    "stockQuantity": 146,
    "thumbnail": "https://cdn.dummyjson.com/product-images/97/thumbnail.jpg",
    "images": [
      "https://cdn.dummyjson.com/product-images/97/1.jpg",
      "https://cdn.dummyjson.com/product-images/97/2.jpg",
      "https://cdn.dummyjson.com/product-images/97/3.jpg",
      "https://cdn.dummyjson.com/product-images/97/4.webp",
      "https://cdn.dummyjson.com/product-images/97/thumbnail.jpg"
    ],
    "isDeleted": false,
    "updatedAt": "2024-05-16T03:37:33.196Z",
    "createdAt": "2024-05-09T06:41:23.594Z"
  },
  {
    "_id": "65a7e45902e12c44f59944af",
    "title": "3 lights lndenpant kitchen islang",
    "description": "3 lights lndenpant kitchen islang dining room pendant rice paper chandelier contemporary led pendant light modern chandelier",
    "price": 2720,
    "discountPercentage": 5.92,
    "category": "65a7e24602e12c44f599443f",
    "brand": "65a7e20102e12c44f5994426",
    "stockQuantity": 44,
    "thumbnail": "https://cdn.dummyjson.com/product-images/98/thumbnail.jpg",
    "images": [
      "https://cdn.dummyjson.com/product-images/98/1.jpg",
      "https://cdn.dummyjson.com/product-images/98/2.jpg",
      "https://cdn.dummyjson.com/product-images/98/3.jpg",
      "https://cdn.dummyjson.com/product-images/98/4.jpg",
      "https://cdn.dummyjson.com/product-images/98/thumbnail.jpg"
    ],
    "isDeleted": false,
    "updatedAt": "2024-05-16T03:37:33.196Z",
    "createdAt": "2024-05-09T06:41:23.594Z"
  },
  {
    "_id": "65a7e45902e12c44f59944b0",
    "title": "American Vintage Wood Pendant Light",
    "description": "American Vintage Wood Pendant Light Farmhouse Antique Hanging Lamp Lampara Colgante",
    "price": 3680,
    "discountPercentage": 8.84,
    "category": "65a7e24602e12c44f599443f",
    "brand": "65a7e20102e12c44f5994425",
    "stockQuantity": 138,
    "thumbnail": "https://cdn.dummyjson.com/product-images/99/thumbnail.jpg",
    "images": [
      "https://cdn.dummyjson.com/product-images/99/1.jpg",
      "https://cdn.dummyjson.com/product-images/99/2.jpg",
      "https://cdn.dummyjson.com/product-images/99/3.jpg",
      "https://cdn.dummyjson.com/product-images/99/4.jpg",
      "https://cdn.dummyjson.com/product-images/99/thumbnail.jpg"
    ],
    "isDeleted": false,
    "updatedAt": "2024-05-16T03:37:33.196Z",
    "createdAt": "2024-05-09T06:41:23.594Z"
  },
  {
    "_id": "65a7e45902e12c44f59944b1",
    "title": "Crystal chandelier maria theresa for 12 light",
    "description": "Crystal chandelier maria theresa for 12 light",
    "price": 3760,
    "discountPercentage": 16,
    "category": "65a7e24602e12c44f599443f",
    "brand": "65a7e20102e12c44f5994427",
    "stockQuantity": 133,
    "thumbnail": "https://cdn.dummyjson.com/product-images/100/thumbnail.jpg",
    "images": [
      "https://cdn.dummyjson.com/product-images/100/1.jpg",
      "https://cdn.dummyjson.com/product-images/100/2.jpg",
      "https://cdn.dummyjson.com/product-images/100/3.jpg",
      "https://cdn.dummyjson.com/product-images/100/thumbnail.jpg"
    ],
    "isDeleted": false,
    "updatedAt": "2024-05-16T03:37:33.196Z",
    "createdAt": "2024-05-09T06:41:23.594Z"
  }
]


exports.seedProduct = async () => {
  try {
    await Product.insertMany(products);
    console.log("Product seeded successfully");
  } catch (error) {
    console.log(error);
  }
};

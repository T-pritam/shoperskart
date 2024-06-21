const Brand = require("../models/Brand");

const brands = [
  {
    "_id": "65a7e20102e12c44f59943da",
    "name": "Apple",
    "__v": 0
  },
  {
    "_id": "65a7e20102e12c44f59943db",
    "name": "Samsung",
    "__v": 0
  },
  {
    "_id": "65a7e20102e12c44f59943dc",
    "name": "OPPO",
    "__v": 0
  },
  {
    "_id": "65a7e20102e12c44f59943dd",
    "name": "Huawei",
    "__v": 0
  },
  {
    "_id": "65a7e20102e12c44f59943de",
    "name": "Microsoft Surface",
    "__v": 0
  },
  {
    "_id": "65a7e20102e12c44f59943df",
    "name": "Infinix",
    "__v": 0
  },
  {
    "_id": "65a7e20102e12c44f59943e0",
    "name": "HP Pavilion",
    "__v": 0
  },
  {
    "_id": "65a7e20102e12c44f59943e1",
    "name": "Impression of Acqua Di Gio",
    "__v": 0
  },
  {
    "_id": "65a7e20102e12c44f59943e2",
    "name": "Royal_Mirage",
    "__v": 0
  },
  {
    "_id": "65a7e20102e12c44f59943e3",
    "name": "Fog Scent Xpressio",
    "__v": 0
  },
  {
    "_id": "65a7e20102e12c44f59943e4",
    "name": "Al Munakh",
    "__v": 0
  },
  {
    "_id": "65a7e20102e12c44f59943e5",
    "name": "Lord - Al-Rehab",
    "__v": 0
  },
  {
    "_id": "65a7e20102e12c44f59943e6",
    "name": "L'Oreal Paris",
    "__v": 0
  },
  {
    "_id": "65a7e20102e12c44f59943e7",
    "name": "Hemani Tea",
    "__v": 0
  },
  {
    "_id": "65a7e20102e12c44f59943e8",
    "name": "Dermive",
    "__v": 0
  },
  {
    "_id": "65a7e20102e12c44f59943e9",
    "name": "ROREC White Rice",
    "__v": 0
  },
  {
    "_id": "65a7e20102e12c44f59943ea",
    "name": "Fair & Clear",
    "__v": 0
  },
  {
    "_id": "65a7e20102e12c44f59943eb",
    "name": "Saaf & Khaas",
    "__v": 0
  },
  {
    "_id": "65a7e20102e12c44f59943ec",
    "name": "Bake Parlor Big",
    "__v": 0
  },
  {
    "_id": "65a7e20102e12c44f59943ed",
    "name": "Baking Food Items",
    "__v": 0
  },
  {
    "_id": "65a7e20102e12c44f59943ee",
    "name": "fauji",
    "__v": 0
  },
  {
    "_id": "65a7e20102e12c44f59943ef",
    "name": "Dry Rose",
    "__v": 0
  },
  {
    "_id": "65a7e20102e12c44f59943f0",
    "name": "Boho Decor",
    "__v": 0
  },
  {
    "_id": "65a7e20102e12c44f59943f1",
    "name": "Flying Wooden",
    "__v": 0
  },
  {
    "_id": "65a7e20102e12c44f59943f2",
    "name": "LED Lights",
    "__v": 0
  },
  {
    "_id": "65a7e20102e12c44f59943f3",
    "name": "luxury palace",
    "__v": 0
  },
  {
    "_id": "65a7e20102e12c44f59943f4",
    "name": "Golden",
    "__v": 0
  },
  {
    "_id": "65a7e20102e12c44f59943f5",
    "name": "Furniture Bed Set",
    "__v": 0
  },
  {
    "_id": "65a7e20102e12c44f59943f6",
    "name": "Ratttan Outdoor",
    "__v": 0
  },
  {
    "_id": "65a7e20102e12c44f59943f7",
    "name": "Kitchen Shelf",
    "__v": 0
  },
  {
    "_id": "65a7e20102e12c44f59943f8",
    "name": "Multi Purpose",
    "__v": 0
  },
  {
    "_id": "65a7e20102e12c44f59943f9",
    "name": "AmnaMart",
    "__v": 0
  },
  {
    "_id": "65a7e20102e12c44f59943fa",
    "name": "Professional Wear",
    "__v": 0
  },
  {
    "_id": "65a7e20102e12c44f59943fb",
    "name": "Soft Cotton",
    "__v": 0
  },
  {
    "_id": "65a7e20102e12c44f59943fc",
    "name": "Top Sweater",
    "__v": 0
  },
  {
    "_id": "65a7e20102e12c44f59943fd",
    "name": "RED MICKY MOUSE..",
    "__v": 0
  },
  {
    "_id": "65a7e20102e12c44f59943fe",
    "name": "Digital Printed",
    "__v": 0
  },
  {
    "_id": "65a7e20102e12c44f59943ff",
    "name": "Ghazi Fabric",
    "__v": 0
  },
  {
    "_id": "65a7e20102e12c44f5994400",
    "name": "IELGY",
    "__v": 0
  },
  {
    "_id": "65a7e20102e12c44f5994401",
    "name": "IELGY fashion",
    "__v": 0
  },
  {
    "_id": "65a7e20102e12c44f5994402",
    "name": "Synthetic Leather",
    "__v": 0
  },
  {
    "_id": "65a7e20102e12c44f5994403",
    "name": "Sandals Flip Flops",
    "__v": 0
  },
  {
    "_id": "65a7e20102e12c44f5994404",
    "name": "Maasai Sandals",
    "__v": 0
  },
  {
    "_id": "65a7e20102e12c44f5994405",
    "name": "Arrivals Genuine",
    "__v": 0
  },
  {
    "_id": "65a7e20102e12c44f5994406",
    "name": "Vintage Apparel",
    "__v": 0
  },
  {
    "_id": "65a7e20102e12c44f5994407",
    "name": "FREE FIRE",
    "__v": 0
  },
  {
    "_id": "65a7e20102e12c44f5994408",
    "name": "The Warehouse",
    "__v": 0
  },
  {
    "_id": "65a7e20102e12c44f5994409",
    "name": "Sneakers",
    "__v": 0
  },
  {
    "_id": "65a7e20102e12c44f599440a",
    "name": "Rubber",
    "__v": 0
  },
  {
    "_id": "65a7e20102e12c44f599440b",
    "name": "Naviforce",
    "__v": 0
  },
  {
    "_id": "65a7e20102e12c44f599440c",
    "name": "SKMEI 9117",
    "__v": 0
  },
  {
    "_id": "65a7e20102e12c44f599440d",
    "name": "Strap Skeleton",
    "__v": 0
  },
  {
    "_id": "65a7e20102e12c44f599440e",
    "name": "Stainless",
    "__v": 0
  },
  {
    "_id": "65a7e20102e12c44f599440f",
    "name": "Eastern Watches",
    "__v": 0
  },
  {
    "_id": "65a7e20102e12c44f5994410",
    "name": "Luxury Digital",
    "__v": 0
  },
  {
    "_id": "65a7e20102e12c44f5994411",
    "name": "Watch Pearls",
    "__v": 0
  },
  {
    "_id": "65a7e20102e12c44f5994412",
    "name": "Bracelet",
    "__v": 0
  },
  {
    "_id": "65a7e20102e12c44f5994413",
    "name": "LouisWill",
    "__v": 0
  },
  {
    "_id": "65a7e20102e12c44f5994414",
    "name": "Copenhagen Luxe",
    "__v": 0
  },
  {
    "_id": "65a7e20102e12c44f5994415",
    "name": "Steal Frame",
    "__v": 0
  },
  {
    "_id": "65a7e20102e12c44f5994416",
    "name": "Darojay",
    "__v": 0
  },
  {
    "_id": "65a7e20102e12c44f5994417",
    "name": "Fashion Jewellery",
    "__v": 0
  },
  {
    "_id": "65a7e20102e12c44f5994418",
    "name": "Cuff Butterfly",
    "__v": 0
  },
  {
    "_id": "65a7e20102e12c44f5994419",
    "name": "Designer Sun Glasses",
    "__v": 0
  },
  {
    "_id": "65a7e20102e12c44f599441a",
    "name": "mastar watch",
    "__v": 0
  },
  {
    "_id": "65a7e20102e12c44f599441b",
    "name": "Car Aux",
    "__v": 0
  },
  {
    "_id": "65a7e20102e12c44f599441c",
    "name": "W1209 DC12V",
    "__v": 0
  },
  {
    "_id": "65a7e20102e12c44f599441d",
    "name": "TC Reusable",
    "__v": 0
  },
  {
    "_id": "65a7e20102e12c44f599441e",
    "name": "Neon LED Light",
    "__v": 0
  },
  {
    "_id": "65a7e20102e12c44f599441f",
    "name": "METRO 70cc Motorcycle - MR70",
    "__v": 0
  },
  {
    "_id": "65a7e20102e12c44f5994420",
    "name": "BRAVE BULL",
    "__v": 0
  },
  {
    "_id": "65a7e20102e12c44f5994421",
    "name": "shock absorber",
    "__v": 0
  },
  {
    "_id": "65a7e20102e12c44f5994422",
    "name": "JIEPOLLY",
    "__v": 0
  },
  {
    "_id": "65a7e20102e12c44f5994423",
    "name": "Xiangle",
    "__v": 0
  },
  {
    "_id": "65a7e20102e12c44f5994424",
    "name": "lightingbrilliance",
    "__v": 0
  },
  {
    "_id": "65a7e20102e12c44f5994425",
    "name": "Ifei Home",
    "__v": 0
  },
  {
    "_id": "65a7e20102e12c44f5994426",
    "name": "DADAWU",
    "__v": 0
  },
  {
    "_id": "65a7e20102e12c44f5994427",
    "name": "YIOSI",
    "__v": 0
  }
]


exports.seedBrand = async () => {
  try {
    await Brand.insertMany(brands);
    console.log('Brand seeded successfully');
  } catch (error) {
    console.log(error);
  }
};
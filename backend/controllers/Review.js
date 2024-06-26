const Review = require("../models/Review")
const onlytoken = require("../utils/onlyToken")
const Product = require("../models/Product")

exports.create = async (req, res) => {
    try {
        req.body.user = onlytoken(req.body.user)
        console.log(req.body)
        const created = await new Review(req.body)
        await created.save()
        const newRating = parseInt(req.body.rating)
        await Product.findByIdAndUpdate(req.body.product,[
            {
              $set: {
                // Apply the formula for the new rating
                rating: {
                  $divide: [
                    {
                      $add: [
                        { $multiply: [{ $toDouble: "$rating" }, { $toDouble: "$totalratings" }] }, // (rating * totalRatings)
                        newRating // + new rating from request body
                      ]
                    },
                    { $add: [{ $toDouble: "$totalratings" }, 1] } // Divide by (totalRatings + 1)
                  ]
                }
              }
            }
          ])
          await Product.findByIdAndUpdate(req.body.product,{
            $inc: {
              totalratings: 1 // Increment discount by 5
            }
          })
        res.status(201).json(created)
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Error posting review, please trying again later' })
    }
}

exports.getByProductId = async (req, res) => {
    try {
        const { id } = req.params
        console.log("id",id)
        var count = 0
        var totalRating = 0
        const ratings = new Array(8).fill(0);

        const result = await Review.find({ product: id }).populate('user').exec()
        const totalDocs = await Review.find({ product: id }).countDocuments().exec()
        result.forEach((prod) => {
            switch (prod.rating) {
                case 1:
                    ratings[1] += 1
                    break;
                case 2:
                    ratings[2] += 1
                    break;
                case 3:
                    ratings[3] += 1
                    break;
                case 4:
                    ratings[4] += 1
                    break;
                case 5:
                    ratings[5] += 1
                    break;
            }
            if (prod.comment == undefined) {
                count += 1
            }
            totalRating += prod.rating
        })
        for (let i = 1; i < 6; i++) {
            if (ratings[i] > ratings[6]) {
                ratings[6] = ratings[i];
                ratings[7] = i;
            }
        }
        ratings[0] = totalRating / totalDocs

        res.status(200).json({ result, totalDocs, count, ratings })

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error getting reviews for this product, please try again later' })
    }
}

exports.updateById = async (req, res) => {
    try {
        console.log(req.params)
        const { id } = req.params
        const prev = await Review.findByIdAndUpdate(id, req.body)
        const updated = await Review.findByIdAndUpdate(id, req.body, { new: true }).populate('user')
        const prod = await Product.findById(updated.product)
        const newRating = parseFloat(updated.rating)
        const oldRating = parseFloat(prev.rating)

        await Product.findOneAndUpdate(updated.product,[
            {
              $set: {
                // Apply the formula with the dynamic rating
                rating: {
                  $divide: [
                    {
                      $add: [
                        {
                          $subtract: [
                            { $ceil: { $multiply: [{ $toDouble: "$rating" }, { $toDouble: "$totalratings" }] } },
                            oldRating// - rating
                          ]
                        },
                        newRating // + rating from request params
                      ]
                    },
                    { $toDouble: "$totalratings" } // Divide by totalRating
                  ]
                }
              }
            }
          ])
        
        res.status(200).json(updated)
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error updating review, please try again later' })
    }
}

exports.getByUserProduct = async (req, res) => {
    try {
        const user = onlytoken(req.params.user)
        const result = await Review.findOne({ user: user, product: req.params.id }).populate('product')
        const totalDocs = await Review.findOne({ user: user, product: req.params.id }).countDocuments().exec()
        res.status(200).json({ result, totalDocs })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error updating review, please try again later' })
    }
}

exports.deleteById = async (req, res) => {
    try {
        const { id } = req.params
        const deleted = await Review.findByIdAndDelete(id)
        res.status(200).json(deleted)
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error deleting review, please try again later' })
    }
}
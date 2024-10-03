import { Schema, model } from "mongoose"

const productSchema = new Schema({
  imageUrl: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  discount: {
    type: Number,
    default: 0,
  },
  discountedPrice: {
    type: Number,
    default: function (price: number, discount: number) {
      return price - price * (discount / 100)
    },
  },
  rating: {
    average: {
      type: Number,
      required: true,
      min: 0,
      max: 5,
    },
    count: {
      type: Number,
      default: 0,
    },
  },
})

const Product = model("Product", productSchema)

export default Product

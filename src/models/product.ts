import { Schema, model } from "mongoose"

const productSchema = new Schema({
  images: {
    type: [String],
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    // required: true
  },
  stock: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true,
  },
  category_id: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    // required: true,
  },
  salers_id: {
    type: Schema.Types.ObjectId,
    ref: "User",
    // required: true,
  },
  discount: {
    type: Number,
    default: 0,
  },
  discountedPrice: {
    type: Number,
    // default: function (price: number, discount: number) {
    //   return price - price * (discount / 100)
    // },
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

productSchema.pre('save', function(next) {
  if (this.price && this.discount) {
    this.discountedPrice = this.price - (this.price * (this.discount / 100));
  }

  next();
});

const Product = model("Product", productSchema)

export default Product

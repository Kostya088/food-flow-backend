import { model, Schema } from 'mongoose';

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    image: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { _id: false },
);

const shopSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    products: {
      type: [productSchema],
      default: [],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const Shop = model('Shop', shopSchema);

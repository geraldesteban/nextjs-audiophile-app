import mongoose from "mongoose";

const speakersSchema = new mongoose.Schema(
  {
    id: { type: Number, required: true, unique: true },
    slug: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    image: {
      mobile: { type: String, required: true },
      tablet: { type: String, required: true },
      desktop: { type: String, required: true },
    },
    category: { type: String, required: true },
    categoryImage: {
      mobile: { type: String, required: true },
      tablet: { type: String, required: true },
      desktop: { type: String, required: true },
    },
    new: { type: Boolean, default: false },
    price: { type: Number, required: true },
    description: { type: String },
    features: { type: String },
    includes: [
      {
        quantity: { type: Number, required: true },
        item: { type: String, required: true },
      },
    ],
    gallery: {
      first: {
        mobile: { type: String, required: true },
        tablet: { type: String, required: true },
        desktop: { type: String, required: true },
      },
      second: {
        mobile: { type: String, required: true },
        tablet: { type: String, required: true },
        desktop: { type: String, required: true },
      },
      third: {
        mobile: { type: String, required: true },
        tablet: { type: String, required: true },
        desktop: { type: String, required: true },
      },
    },
    others: [
      {
        slug: { type: String, required: true },
        name: { type: String, required: true },
        image: {
          mobile: { type: String, required: true },
          tablet: { type: String, required: true },
          desktop: { type: String, required: true },
        },
      },
    ],
    cart: {
      image: { type: String, required: true },
    },
  },
  { timestamps: true },
);

const Speakers =
  mongoose.models.Speakers || mongoose.model("Speakers", speakersSchema);

export default Speakers;

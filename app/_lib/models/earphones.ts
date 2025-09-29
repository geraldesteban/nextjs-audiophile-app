import mongoose from "mongoose";

const earphonesSchema = new mongoose.Schema(
  {
    id: { type: Number, required: true, unique: true },
    slug: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    image: { type: Object, required: true },
    category: { type: String, required: true },
    categoryImage: { type: Object },
    new: { type: Boolean, default: false },
    price: { type: Number, required: true },
    description: { type: String },
    features: { type: String },
    includes: { type: Array, default: [] },
    gallery: { type: Object },
    others: { type: Array, default: [] },
  },
  { timestamps: true }
);

const Earphones =
  mongoose.models.Earphones || mongoose.model("Earphones", earphonesSchema);

export default Earphones;

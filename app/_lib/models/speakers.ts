import mongoose from "mongoose";

const speakersSchema = new mongoose.Schema(
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

const Speakers =
  mongoose.models.Speakers || mongoose.model("Earphones", speakersSchema);

export default Speakers;

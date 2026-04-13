import mongoose from "mongoose";

const ordersSchema = new mongoose.Schema(
  {
    orderId: { type: String },

    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
    },

    items: [
      {
        id: { type: String },
        name: { type: String },
        price: { type: Number },
        qty: { type: Number },
        image: { type: String },
      },
    ],

    customer: {
      email: { type: String },
      name: { type: String },
      phone: { type: String },
      address: { type: String },
      zipcode: { type: Number },
      city: { type: String },
      country: { type: String },
      paymentMethod: { type: String },
    },

    status: {
      type: String,
      enum: ["pending", "paid", "failed"],
      default: "pending",
    },
  },
  { timestamps: true },
);

const Orders = mongoose.models.Orders || mongoose.model("Orders", ordersSchema);

export default Orders;

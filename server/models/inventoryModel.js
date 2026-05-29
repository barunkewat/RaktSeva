import mongoose from "mongoose";

const inventorySchema = new mongoose.Schema(
  {
    inventoryType: {
      type: String,
      required: [true, "Inventory type is required"],
      enum: ["in", "out"],
    },
    bloodGroup: {
      type: String,
      required: [true, "Blood group is required"],
      enum: ["O+", "O-", "A+", "A-", "B+", "B-", "AB+", "AB-"],
    },
    quantity: {
      type: Number,
      required: [true, "Blood quantity is required"],
    },
    email: {
      type: String,
      required: [true, "Donor Email is required!"],
    },
    donor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "userModel",
      required: function () {
        return this.inventoryType === "in";
      },
    },
    organisation: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "userModel",
      required: [true, "Organisation is required"],
    },
    hospital: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "userModel",
      required: function () {
        return this.inventoryType === "out";
      },
    },
  },
  { timestamps: true },
);

export default mongoose.model("Inventory", inventorySchema);

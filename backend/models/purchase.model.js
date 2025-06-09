import mongoose from "mongoose";

const purchaseSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Types.ObjectId,// Getting id through other schema using their ref
    ref: "User",
  },
  courseId: {
    type: mongoose.Types.ObjectId,
    ref: "Course",
  },
});

export const Purchase = mongoose.model("Purchase", purchaseSchema);
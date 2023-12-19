import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    user: {
      type: ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    collection: "tasks",
    timestamps: true,
  }
);

export default mongoose.model("Task", taskSchema);


import { Schema, models, model } from "mongoose";
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"],
    },
    imageURL: {
      type: String,
    },
  },
  { timestamps: true }
);

const Trainer = models.trainers || model("trainers", userSchema);

export default Trainer;

import mongoose from "mongoose";
import { customEmailValidation } from "../../../utils/helper";
import env from "../../../config/env";
import bcrypt from "bcrypt";

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      trim: true,
      validate: {
        validator: customEmailValidation,
        message: "Invalid email format",
      },
    },
    password: {
      type: String,
      required: true,
      set: function (password: string) {
        return bcrypt.hashSync(password, env.SALT);
      },
    },
  },
  {
    collection: "users",
  }
);

export default mongoose.model("User", userSchema);


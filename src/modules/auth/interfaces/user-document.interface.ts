import { Document } from "mongoose";

export default interface IUserDocument extends Document {
  email: string;
  password: string;
}


import { Document } from "mongoose";

export default interface ITaskDocument extends Document {
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}


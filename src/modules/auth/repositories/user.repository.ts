import { FilterQuery } from "mongoose";
import User from "../schemas/user.schema";
import IUserDocument from "../interfaces/user-document.interface";

const findOne = async (
  conditions: FilterQuery<IUserDocument>
): Promise<IUserDocument | null> => {
  try {
    return await User.findOne(conditions);
  } catch (err) {
    throw err;
  }
};

export { findOne };


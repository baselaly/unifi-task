import env from "../../../config/env";
import CustomError from "../../../utils/custom.error";
import LoginDto from "../dtos/login.dto";
import { findOne } from "../repositories/user.repository";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const authServiceLogin = async (data: LoginDto) => {
  try {
    const user: any = await findOne({ email: data.email });

    if (!user) {
      throw new CustomError("wrong credentials", 401);
    }

    if (!bcrypt.compareSync(data.password, user.password)) {
      throw new CustomError("wrong credentials", 401);
    }

    const userData = {
      _id: user._id,
      email: user.email,
    };

    const token = jwt.sign(userData, env.JWT_SECRET_KEY);

    return {
      token,
      userData,
    };
  } catch (err) {
    throw err;
  }
};

export { authServiceLogin };


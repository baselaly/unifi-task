import { NextFunction, Request, Response } from "express";
import CustomError from "../utils/custom.error";
import jwt, { JwtPayload } from "jsonwebtoken";
import env from "../config/env";

interface IAuthPayload extends JwtPayload {
  _id: string;
}

export default (req: Request, res: Response, next: NextFunction) => {
  try {
    if (req.headers["authorization"]) {
      const tokenArr: Array<string> = req.headers["authorization"].split(" ");

      const token: string = tokenArr[1];

      const payload = jwt.verify(token, env.JWT_SECRET_KEY) as IAuthPayload;

      req.userId = payload["_id"];

      next();
    } else {
      next(new CustomError("not authorized", 401));
    }
  } catch (err) {
    next(new CustomError("not authorized", 401));
  }
};


import { NextFunction, Request, Response } from "express";
import { authServiceLogin } from "../services/auth.service";
import SuccessClass from "../../../utils/success.class";

const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await authServiceLogin({
      email: req.body.email,
      password: req.body.password,
    });

    res.json(new SuccessClass(data));
  } catch (err) {
    next(err);
  }
};

export { login };


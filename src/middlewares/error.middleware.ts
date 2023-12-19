import { NextFunction, Request, Response } from "express";

export default (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(error.statusCode || 500).json({
    errors: error.errors || "Something Went Wrong!",
    timestamp: new Date().toISOString(),
    path: req.path,
  });
};


import { NextFunction, Request, Response } from "express";
import {
  taskServiceCreate,
  taskServiceUpdate,
  taskServiceget,
  taskServiceDelete,
} from "../services/task.service";
import SuccessClass from "../../../utils/success.class";
import taskSerializer from "../serializers/task.serializer";

const store = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await taskServiceCreate({
      title: req.body.title,
      description: req.body.description,
      user: req.userId,
    });

    res.json(new SuccessClass({}));
  } catch (err) {
    next(err);
  }
};

const update = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await taskServiceUpdate(req.params.id, req.userId, {
      title: req.body.title,
      description: req.body.description,
    });

    res.json(new SuccessClass({}));
  } catch (err) {
    next(err);
  }
};

const get = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const task = await taskServiceget(req.params.id, req.userId);

    const serializedTask = new taskSerializer(task);

    res.json(new SuccessClass(serializedTask));
  } catch (err) {
    next(err);
  }
};

const destroy = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await taskServiceDelete(req.params.id, req.userId);

    res.json(new SuccessClass({}));
  } catch (err) {
    next(err);
  }
};

export { store, update, get, destroy };


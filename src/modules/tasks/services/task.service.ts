import CustomError from "../../../utils/custom.error";
import { ITask } from "../interfaces/task.interface";
import {
  create,
  findOne,
  findOneAndDelete,
  findOneAndUpdate,
} from "../respositories/task.repository";

const taskServiceCreate = async (data: ITask) => {
  try {
    await create(data);
  } catch (err) {
    throw err;
  }
};

const taskServiceUpdate = async (
  taskId: string,
  userId: string,
  data: ITask
) => {
  try {
    const conditions = { _id: taskId, user: userId };

    await findOneAndUpdate({ conditions, data });
  } catch (err) {
    throw err;
  }
};

const taskServiceget = async (taskId: string, userId: string) => {
  try {
    const conditions = { _id: taskId, user: userId };
    const task = await findOne(conditions);

    if (!task) {
      throw new CustomError("not found", 404);
    }

    return task;
  } catch (err) {
    throw err;
  }
};

const taskServiceDelete = async (taskId: string, userId: string) => {
  try {
    const conditions = { _id: taskId, user: userId };
    const task = await findOne(conditions);

    if (!task) {
      throw new CustomError("not found", 404);
    }

    await findOneAndDelete(conditions);
  } catch (err) {
    throw err;
  }
};

export {
  taskServiceCreate,
  taskServiceUpdate,
  taskServiceget,
  taskServiceDelete,
};


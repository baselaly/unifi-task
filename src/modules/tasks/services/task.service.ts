import CustomError from "../../../utils/custom.error";
import { getLimitAndSkipOptions } from "../../../utils/helper";
import { ITask } from "../interfaces/task.interface";
import {
  create,
  findOne,
  findOneAndDelete,
  findOneAndUpdate,
  find,
  count,
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

const taskServicegetAll = async (
  userId: string,
  page: number,
  perPage: number
) => {
  try {
    const conditions = { user: userId };

    const { limit, skip } = getLimitAndSkipOptions(page, perPage);

    const tasks = await find(conditions, { limit, skip });
    const noOfTasks = await count(conditions);

    const totalPages = Math.ceil(noOfTasks / limit);

    return { tasks, totalPages };
  } catch (err) {
    throw err;
  }
};

export {
  taskServiceCreate,
  taskServiceUpdate,
  taskServiceget,
  taskServiceDelete,
  taskServicegetAll,
};


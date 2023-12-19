import { FilterQuery } from "mongoose";
import ITaskDocument from "../interfaces/task-document.interface";
import Task from "../schemas/task.schema";
import { ITask } from "../interfaces/task.interface";

const findOne = async (
  conditions: FilterQuery<ITaskDocument>
): Promise<ITaskDocument | null> => {
  try {
    return await Task.findOne(conditions).lean();
  } catch (err) {
    throw err;
  }
};

const create = async (data: ITask): Promise<ITaskDocument | null> => {
  try {
    return await Task.create(data);
  } catch (err) {
    throw err;
  }
};

const findOneAndUpdate = async ({
  conditions,
  data,
}: {
  conditions: FilterQuery<ITaskDocument>;
  data: ITask;
}): Promise<ITaskDocument | null> => {
  try {
    return await Task.findOneAndUpdate(conditions, data);
  } catch (err) {
    throw err;
  }
};

const findOneAndDelete = async (
  conditions: FilterQuery<ITaskDocument>
): Promise<ITaskDocument | null> => {
  try {
    return await Task.findOneAndDelete(conditions);
  } catch (err) {
    throw err;
  }
};

const find = async (
  conditions: FilterQuery<ITaskDocument>,
  { limit, skip }: { limit: number; skip: number }
): Promise<Array<ITaskDocument>> => {
  try {
    return await Task.find(conditions).limit(limit).skip(skip).lean();
  } catch (err) {
    throw err;
  }
};

const count = async (
  conditions: FilterQuery<ITaskDocument>
): Promise<number> => {
  try {
    return await Task.countDocuments(conditions);
  } catch (err) {
    throw err;
  }
};

export { findOne, create, findOneAndUpdate, findOneAndDelete, find, count };


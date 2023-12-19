import ITaskDocument from "../interfaces/task-document.interface";

export default class taskSerializer {
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  _id: string;

  constructor(task: ITaskDocument) {
    this.title = task.title;
    this.description = task.description;
    this._id = task._id;
    this.createdAt = task.createdAt;
    this.updatedAt = task.updatedAt;
  }
}


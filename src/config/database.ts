import mongoose from "mongoose";

export default (databaseConnection: string) => {
  mongoose
    .connect(databaseConnection)
    .then(() => console.log("Connected!"))
    .catch(() => {
      console.log("database connection failed!!");
      process.exit(1);
    });
};


import { config } from "dotenv";

config();

export default {
  DATABASE_URL: String(process.env.DATABASE_URL),
  PORT: Number(process.env.PORT),
  SALT: Number(process.env.SALT),
  JWT_SECRET_KEY: String(process.env.JWT_SECRET_KEY),
};


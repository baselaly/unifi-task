import databaseConnect from "../src/config/database";
import env from "../src/config/env";
import User from "../src/modules/auth/schemas/user.schema";

databaseConnect(String(env.DATABASE_URL));

User.create({ email: "unifi@gmail.com", password: "123456" });

console.log("database seeded successfully!");

process.exit(0);


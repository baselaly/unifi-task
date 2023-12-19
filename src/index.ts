import databaseConnect from "./config/database";
import server from "./config/server";
import env from "./config/env";

const port: number = env.PORT;

databaseConnect(env.DATABASE_URL);

server.listen(port || 3000, () => {
  console.log("app running");
});


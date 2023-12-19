import { Router } from "express";
import authRouter from "../modules/auth/routers/auth.router";
import taskRouter from "../modules/tasks/routers/task.router";

const router: Router = Router();

router.use("/auth", authRouter);
router.use("/tasks", taskRouter);

export default router;


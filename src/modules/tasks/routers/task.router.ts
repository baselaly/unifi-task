import { Router } from "express";
import validationMiddleware from "../../../middlewares/validation.middleware";
import TaskDto from "../dtos/task.dto";
import authMiddleware from "../../../middlewares/auth.middleware";
import {
  store,
  update,
  get,
  destroy,
  getAll,
} from "../conrtollers/task.conrtoller";

const router: Router = Router();

router.post("/", authMiddleware, validationMiddleware(TaskDto), store);
router.put("/:id", authMiddleware, validationMiddleware(TaskDto), update);
router.get("/:id", authMiddleware, get);
router.delete("/:id", authMiddleware, destroy);
router.get("/", authMiddleware, getAll);

export default router;


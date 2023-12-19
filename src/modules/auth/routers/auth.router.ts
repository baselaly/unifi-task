import { Router } from "express";
import { login } from "../controllers/auth.controller";
import validationMiddleware from "../../../middlewares/validation.middleware";
import LoginDto from "../dtos/login.dto";

const router: Router = Router();

router.post("/login", validationMiddleware(LoginDto), login);

export default router;


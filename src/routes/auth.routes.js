import { Router } from "express";
import { methods as authController } from "../controllers/auth.controller";

const router = Router();

router.post("/", authController.login);
router.post("/registro", authController.login);

export default router;
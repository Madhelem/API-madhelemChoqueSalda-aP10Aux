
import { Router } from "express";
import { userControllers } from "../controllers/user";
import {authToken } from "../libs/authToken";


const router = Router();


router.get("/", userControllers.index);
router.get("/profile/:id", authToken, userControllers.profile);
router.post("/signUp", userControllers.SignUp);
router.post("/login", userControllers.Login);
router.put("/edit/:id", userControllers.Edit);
router.post("/sendEmail", userControllers.sendEmail);
router.delete("/delete/:id", userControllers.Delete);

export default router;

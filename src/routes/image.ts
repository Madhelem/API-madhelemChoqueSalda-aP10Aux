import { Router } from "express";
import {imageControllers} from "../controllers/image";

const router = Router();

router.get("/:filename", imageControllers.getImage);
router.post("/newImg/", imageControllers.newImage);

export default router;
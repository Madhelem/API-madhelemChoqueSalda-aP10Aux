import { Router } from "express";
import { postControllers } from "../controllers/post";



const router = Router();


router.get("/", postControllers.index);
router.post("/Newpost", postControllers.newPost);
router.put("/Edit/:id", postControllers.editPost);
router.delete("/delete/:id", postControllers.DeletePost);

export default router;

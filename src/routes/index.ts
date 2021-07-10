import { Router } from "express";
import UserRoutes from "./user"; 
import PostRoutes from "./post";
import ImageRoutes from "./image";
/*import emailRoutes from "./email";*/

const router = Router();
router.use( "./image",ImageRoutes);
router.use("/user", UserRoutes);
router.use("/post", PostRoutes);
/*router.use("/email", emailRoutes);*/
export default router;

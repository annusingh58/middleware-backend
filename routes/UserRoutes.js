import express from "express";
import { register} from "../controllers/UserControllers.js";
import { checkpin } from "../middleware/middleware.js";

const router = express.Router();



router.post('/register',register)
router.post('/checkpin',checkpin)

export default router;
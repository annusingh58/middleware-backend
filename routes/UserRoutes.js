import express from "express";
import { changenumber, register} from "../controllers/UserControllers.js";
import { checkpin } from "../middleware/middleware.js";

const router = express.Router();



router.post('/register',register)
router.post('/checkpin',checkpin)
router.post('/changenumber',changenumber)


export default router;
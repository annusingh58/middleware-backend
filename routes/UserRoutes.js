import express from "express";
import { changeaddress, changename, changenumber, changepancard, register} from "../controllers/UserControllers.js";
import { checkpin } from "../middleware/middleware.js";

const router = express.Router();



router.post('/register',register)
router.post('/checkpin',checkpin)
router.post('/changenumber',changenumber);
router.post('/changeaddress',changeaddress);
router.post('/changepancard',changepancard);
router.post('/changename',changename)





export default router;
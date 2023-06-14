import express from "express";
import { changeaddress, changename, changenumber, changepancard, register} from "../controllers/UserControllers.js";
import { checkpin } from "../middleware/middleware.js";

const router = express.Router();



router.post('/register',register)
router.post('/checkpin',checkpin)
router.post('/changenumber',checkpin,changenumber);
router.post('/changeaddress',checkpin,changeaddress);
router.post('/changepancard',checkpin,changepancard);
router.post('/changename',checkpin,changename)





export default router;
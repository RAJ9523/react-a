
import express from "express"
import { isAuthorized} from "../middleware/auth.js";
import { postresource } from "../controller/ResourceController.js";
import { getResources } from "../controller/ResourceController.js";
const router=express.Router();


router.post("/postResources",postresource);
router.get("/Resources",getResources);


export default router;

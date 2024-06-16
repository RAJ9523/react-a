import express from "express"
import { PostApplication,jobseekerdeleteallapplication,
 employergetallapplication,jobseekergetallapplication} from "../controller/ApplicationController.js";
import { isAuthorized } from "../middleware/auth.js";

const router=express.Router();

router.post("/postapplication",isAuthorized,PostApplication);
router.get("/employergetapplication",isAuthorized,employergetallapplication);
router.get("/jobseekergetapplication",isAuthorized,jobseekergetallapplication);
router.delete("/deleteapplication/:id",isAuthorized,jobseekerdeleteallapplication);

export default router;



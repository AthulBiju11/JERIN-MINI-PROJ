import express from "express";
import { verifyToken } from "../middleware/jwt.js";
import { getRequests, setRequests } from "../controllers/request.controller.js";
const router = express.Router();

router.get("/",verifyToken,getRequests);
router.post("/",verifyToken,setRequests)

export default router;
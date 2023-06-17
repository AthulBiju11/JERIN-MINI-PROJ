import express from "express";

import { setProducts , getProducts} from "../controllers/product.controller.js";

const router = express.Router();

router.post("/", setProducts)
router.get("/", getProducts)

export default router;

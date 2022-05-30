import express from "express";

import init from "../controllers/setup/init.js";
import destroy from "../controllers/setup/destroy.js";
import register from "../controllers/setup/register.js";

const router = express.Router();

router.post("/init", init);
router.get("/destroy", destroy);
router.get("/register", register);

export default router;

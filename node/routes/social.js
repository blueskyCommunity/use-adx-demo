import express from "express";

import follow from "../controllers/social/follow.js";
import unFollow from "../controllers/social/unFollow.js";
import listFollowers from "../controllers/social/listFollowers.js";
import listFollows from "../controllers/social/listFollows.js";

const router = express.Router();

router.post("/follow", follow);
router.post("/unfollow", unFollow);
router.get("/list-followers", listFollowers);
router.get("/list-follows", listFollows);

export default router;

import express from "express";

import createPost from "../controllers/posts/createPost.js";
import timeline from "../controllers/posts/timeline.js";
import feed from "../controllers/posts/feed.js";

const router = express.Router();

router.post("/create-post", createPost);
router.get("/timeline", timeline);
router.get("/feed", feed);

export default router;

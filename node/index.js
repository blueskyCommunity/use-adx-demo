import express from "express";
import cors from "cors";

import init from "./routes/setup.js";
import posts from "./routes/posts.js";
import interaction from "./routes/social.js";

const app = express();

// cors middleware
app.use(cors());

// Inbuilt middleware to parse data
app.use(express.json());

app.use("/api", init);
app.use("/api", posts);
app.use("/api", interaction);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

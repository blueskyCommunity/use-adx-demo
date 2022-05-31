import { REPO_PATH } from "../../../adx/cli/dist/lib/env.js";
import { loadClient } from "../../../adx/cli/dist/lib/client.js";

const createPost = async (req, res) => {
  const { text } = req.body;

  try {
    if (text) {
      const client = await loadClient(REPO_PATH);
      const post = await client.addPost(text);
      res.json({
        status: "success",
        data: post,
      });
    } else {
      res.json({
        status: "Error",
        msg: "Text field is Empty",
      });
    }
  } catch (err) {
    res.json({
      status: "Error",
      msg: err,
    });
  }
};

export default createPost;

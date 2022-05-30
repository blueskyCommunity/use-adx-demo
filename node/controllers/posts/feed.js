import { REPO_PATH } from "../../../adx/cli/dist/lib/env.js";
import { loadClient } from "../../../adx/cli/dist/lib/client.js";

const feed = async (req, res) => {
  const { id } = req.query;

  const client = await loadClient(REPO_PATH);
  const count = 100;

  try {
    const feed = await client.retrieveFeed(id, count);
    if (!feed) {
      res.json({ status: "failed", msg: "User not found" });
    } else {
      res.json({ status: "success", data: feed });
    }
  } catch (err) {
    res.json({ status: "failed", msg: err });
  }
};

export default feed;

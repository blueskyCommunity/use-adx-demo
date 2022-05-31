import { REPO_PATH } from "../../../adx/cli/dist/lib/env.js";
import { loadClient } from "../../../adx/cli/dist/lib/client.js";

const unFollow = async (req, res) => {
  const { username } = req.body;

  try {
    if (username) {
      const client = await loadClient(REPO_PATH);
      await client.unfollowUser(username);
      res.json({
        status: "success",
        msg: "unfollowed",
      });
    } else {
      res.json({
        status: "Error",
        msg: "username field is Empty",
      });
    }
  } catch (err) {
    res.json({
      status: "Error",
      msg: err,
    });
  }
};

export default unFollow;

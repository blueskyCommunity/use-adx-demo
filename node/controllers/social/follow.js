// import { REPO_PATH } from "../../../adx/cli/dist/lib/env.js";
import { loadClient } from "../../../adx/cli/dist/lib/client.js";

const follow = async (req, res) => {
  const { username } = req.body;

  try {
    if (username) {
      const client = await loadClient(req.cookies.REPO_PATH);
      await client.followUser(username);
      res.json({
        status: "success",
        msg: "followed",
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

export default follow;

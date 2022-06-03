// import { REPO_PATH } from "../../../adx/cli/dist/lib/env.js";
import { loadClient } from "../../../adx/cli/dist/lib/client.js";

const listFollowers = async (req, res) => {
  try {
    const client = await loadClient(req.cookies.REPO_PATH);
    const did = client.did;
    const followers = await client.listFollowersForUser(did);

    res.json({
      status: "success",
      data: followers,
    });
  } catch (err) {
    res.json({
      status: "Error",
      msg: err,
    });
  }
};

export default listFollowers;

import { REPO_PATH } from "../../../adx/cli/dist/lib/env.js";
import * as config from "../../../adx/cli/dist/lib/config.js";

const destroy = async (req, res) => {
  try {
    await config.destroy(REPO_PATH);
    res.json({ status: "success", msg: "deleted" });
  } catch (err) {
    res.json({ status: "failed", msg: err });
  }
};

export default destroy;

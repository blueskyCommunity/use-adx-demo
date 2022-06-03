import { loadClient } from "../../../adx/cli/dist/lib/client.js";
import { loadCfg } from "../../../adx/cli/dist/lib/config.js";
// import { REPO_PATH } from "../../../adx/cli/dist/lib/env.js";

const register = async (req, res) => {
  const client = await loadClient(req.cookies.REPO_PATH);
  const cfg = await loadCfg(REPO_PATH);

  try {
    await client.register(cfg.account.username);
    res.json({ status: "success", msg: "User registered on server." });
  } catch (e) {
    res.json({ status: "failed", msg: "User not registered on server." });
  }
};

export default register;

import { REPO_PATH } from "../../../adx/cli/dist/lib/env.js";
import * as config from "../../../adx/cli/dist/lib/config.js";
import { loadClient } from "../../../adx/cli/dist/lib/client.js";

const init = async (req, res) => {
  const { username, server } = req.body;

  const exists = await config.cfgExists(REPO_PATH);

  if (exists) {
    res.json({
      status: "failed",
      msg: "Repo already initialised, first destroy it.",
    });
  } else {
    await config.writeCfg(REPO_PATH, username, server, true);

    const client = await loadClient(REPO_PATH);
    try {
      await client.register(username);
    } catch (e) {
      console.log("Not able to register on server, skipping it for now.");
    }

    res.json({
      status: "success",
      msg: "initiated",
      data: {
        clientDID: client.did,
      },
    });
  }
};

export default init;

// import { REPO_PATH } from "../../../adx/cli/dist/lib/env.js";
import * as config from "../../../adx/cli/dist/lib/config.js";
import { loadClient } from "../../../adx/cli/dist/lib/client.js";
import path from 'path';
import os from 'os';

function expandPath(str) {
  if (str.startsWith('~')) {
      str = path.join(os.homedir(), str.slice(1));
  }
  return path.resolve(str);
}

const init = async (req, res) => {
  const { username, server } = req.body;
  const REPO_PATH = expandPath(`~/.adx-${username}`);
  res.cookie('REPO_PATH', REPO_PATH, { maxAge: 900000, httpOnly: true });
  console.log(`cookie set for ${ REPO_PATH }`);
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
  return REPO_PATH;
};

export default init;

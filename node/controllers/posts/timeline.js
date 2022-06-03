// import { REPO_PATH } from "../../../adx/cli/dist/lib/env.js";
import { loadClient } from "../../../adx/cli/dist/lib/client.js";

const timeline = async (req, res) => {
  const client = await loadClient(req.cookies.REPO_PATH);
  const count = 100;

  const timeline = await client.retrieveTimeline(count);
  
  res.json({ status: "success", data: timeline });
};

export default timeline;

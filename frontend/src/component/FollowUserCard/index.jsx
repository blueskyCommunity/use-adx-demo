import { useState } from "react";
import axios from "axios";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const FollowUserCard = ({ handleSubmit }) => {
  const [username, setUsername] = useState("");

  const handleFollow = async (e) => {
    e.preventDefault();
    const baseUrl = "http://localhost:5000";
    const res = await axios.post(`${baseUrl}/api/follow`, {
      username,
    });
    console.log(res.data);
    if (res.data.status === "success") {
      handleSubmit();
      setUsername("");
    }
  };
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Box sx={{ mt: 5, maxWidth: 550, px: 2, width: "100%" }}>
        <Typography component="div" variant="h6">
          Follow User
        </Typography>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{ mt: 2 }}
        >
          <form
            onSubmit={handleFollow}
            style={{ display: "flex", width: "100%" }}
          >
            <TextField
              label="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              sx={{ flex: 1 }}
            />
            <Button
              variant="contained"
              onClick={handleFollow}
              sx={{ px: 2, py: 2, ml: 3 }}
            >
              Follow
            </Button>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default FollowUserCard;

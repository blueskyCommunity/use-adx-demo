import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

const Initiate = () => {
  const [username, setUsername] = useState("");
  const [server, setServer] = useState("");

  const navigate = useNavigate();
  const handleInitialize = async () => {
    const baseUrl = "http://localhost:5000";
    const res = await axios.post(`${baseUrl}/api/init`, {
      username,
      server,
    });
    if (res.data.status === "failed") {
      alert("Repo Already Initiated");
    } else window.localStorage.setItem("userDID", res.data.data.clientDID);
    navigate("/dashboard");
  };

  useEffect(() => {
    const userDID = window.localStorage.getItem("userDID");
    if (userDID) {
      navigate("/dashboard");
    }
  }, []);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      minHeight="100vh"
    >
      <Box>
        <Typography variant="h4" component="div" sx={{ mb: 5 }}>
          ADX Feeds
        </Typography>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <TextField
            label="Server"
            value={server}
            onChange={(e) => setServer(e.target.value)}
            sx={{ mb: 3 }}
          />
          <TextField
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            sx={{ mb: 3 }}
          />
          <Button
            variant="contained"
            onClick={handleInitialize}
            sx={{ px: 2, py: 2, width: "100%", flex: 1 }}
          >
            Enter
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
export default Initiate;
